export default function handleResponseFromAPI(promise) {
  const successReturn = { status: 200, body: 'success' };
  return promise
    .then(() => successReturn)
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
