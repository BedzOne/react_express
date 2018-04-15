const stripe = require('../config').stripe;
  
exports.chargeCard = (req, res) => {
  stripe.customers.list({
    limit: 100,
    email: req.body.stripeToken.email
  })
  .then(customers => {
    let isMatch = function() {
      customers.data.some(cus => {
      if (cus.email == req.body.stripeToken.email) {
        stripe.customers.retrieve(
          cus.id
        , function(err, customer) {
            stripe.charges.create({
              amount: req.body.amount,
              description: 'test charge',
              currency: req.body.currency,
              customer: customer.id
            })
            .then(charge => console.log('charged'))
            // .catch(err => res.sendStatus(404))
        })
        console.log('isMatch')
        res.sendStatus(200)
        return true;
      }
      })
      return true
    }
    isMatch();
    if (customers.data.length <= 0) {
      console.log('new')
        stripe.customers.create({
          description: 'first customer',
          email: req.body.stripeToken.email,
          source: req.body.stripeToken.id
        })
        .then(customer => {
          stripe.charges.create({
            amount: req.body.amount,
            description: 'test charge',
            currency: req.body.currency,
            customer: customer.id
          })
          .then(charge => console.log('charge'))
        })
        .catch(err => res.sendStatus(404));
    }
    res.sendStatus(200);
  })
}