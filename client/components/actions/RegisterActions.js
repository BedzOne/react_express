import axios from 'axios';

export default function postUser() {
  return function(dispatch) {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/users',
      data: this.state,
      responseType: 'json',
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
        console.log(JSON.stringify(response));
        this.setState({isRegistered: true}, () => {
          console.log(this.state)
        })
      })
      .catch(err => console.log(err))
  }
}