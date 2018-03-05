import { BUILD_ORDER } from './constants';

export function buildOrder(total, date, order) {
  return {
    type: BUILD_ORDER,
    order,
    date,
    total
  };
}