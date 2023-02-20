import { BASE_URL } from './constants';
import { reqConfig } from './utils';

class Api {
  constructor({ address }) {
    this._address = address;
  }

  async getWorkers() {
    try {
      const res = await fetch(
        `${this._address}/workers`,
        reqConfig('GET', false, false, ''),
      );
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }
}

const api = new Api({
  address: BASE_URL,
});

export default api;
