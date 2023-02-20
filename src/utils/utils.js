function getUserToken() {
  return localStorage.getItem('jwt');
}

function reqConfig(method, needsAuth, hasBody, { ...bodyValues }) {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...(needsAuth && { Authorization: `Bearer ${getUserToken()}` }),
    },
    ...(hasBody && { body: JSON.stringify({ ...bodyValues }) }),
  };
}

export { reqConfig };
