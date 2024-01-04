export default function handleResponseFromAPI(promise) {
  const successReturn = { status: 200, body: 'success' };
  promise
    .then((() => successReturn), (() => Error()))
    .finally(console.log('Got a response from the API'));
}
