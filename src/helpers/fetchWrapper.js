export const fetchWrapper = {
  get,
  handleResponse
};

function get(url) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
  };
  return fetch(url, requestOptions.headers).then(handleResponse);
}

function handleResponse(response) {
  return response.json().then(data => {
    if (!response.ok) { 
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}