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

  async addWorker(workerData) {
    const { name, area, email, link, telephone, city, location } = workerData;
    try {
      const res = await fetch(
        `${this._address}/workers`,
        reqConfig('POST', true, true, {
          name: name,
          area: area,
          email: email || 'No ingresado',
          link: link || 'No ingresado',
          telephone: telephone || 'No ingresado',
          city: city || 'Viña del Mar',
          location: location,
        }),
      );
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async addReview(id, reviewData, creator) {
    const { review, rating } = reviewData;
    try {
      const res = await fetch(
        `${this._address}/workers/${id}/reviews`,
        reqConfig('POST', true, true, {
          text: review,
          rating,
          creator,
        }),
      );
      return res.ok ? await res.json() : Promise.reject(res.status);
    } catch (err) {
      throw new Error(`Error ${err}.`);
    }
  }

  async getReviewsByWorkerId(id) {
    try {
      const res = await fetch(
        `${this._address}/workers/${id}/reviews`,
        reqConfig('GET', true, false, ''),
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
