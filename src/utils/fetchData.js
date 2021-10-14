let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = (e) => {
      // Petición completada
      if (xhttp.readyState === 4) {
        // Petición completada correctamente
        xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error('Error', url_api));
      }
    };

    xhttp.send();
  });
};

module.exports = fetchData;
