import { BASE_URL } from './constants';
import { reqConfig } from './utils';

export const register = async ({ name, email, password }) => {
  const res = await fetch(
    `${BASE_URL}/signup`,
    reqConfig('POST', false, true, { name, email, password }),
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `Error ${res.status}`);
  return data;
};

export const authorize = async ({ email, password }) => {
  const res = await fetch(
    `${BASE_URL}/signin`,
    reqConfig('POST', false, true, { email, password }),
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `Error ${res.status}`);
  return data;
};

export const getAuthorizedUserData = async () => {
  const res = await fetch(`${BASE_URL}/users/me`, reqConfig('GET', true, false, {}));
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `Error ${res.status}`);
  return data;
};
