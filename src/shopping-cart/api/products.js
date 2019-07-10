import _products from './products.json';

const TIMEOUT=200;

export default {
    getProducts: (cb, timeout=TIMEOUT) => setTimeout(() => cb(_products), timeout),
    checkout: (payload, cb, timeout = TIMEOUT) => setTimeout(() => cb(), timeout)
}