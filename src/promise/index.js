const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Whoops!');
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

const somethinbWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 3000);
    } else {
      const error = new Error('Whoops!');
      reject(error);
    }
  });
};

somethinbWillHappen2()
  .then((response) => console.log(response))
  .then(() => console.log('Hola'))
  .catch((error) => console.error(error));

Promise.all([somethingWillHappen, somethinbWillHappen2])
  .then((response) => console.log('Array of results', response))
  .catch((error) => console.error(error));
