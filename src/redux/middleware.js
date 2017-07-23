const webRequest = store => next => action => {
  switch (action.type) {
  case 'START':
    console.warn('request started');
    const {companyName, difficulty} = action.payload;
    fetch('http://192.168.0.12:8080/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      companyName,
      difficulty,
    }),
  })
  .then((responce) => console.warn(responce))
  .catch((error) => console.warn(error));
  }
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default webRequest;
