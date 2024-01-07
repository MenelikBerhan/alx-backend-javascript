/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './utils';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // const signUp = signUpUser(firstName, lastName);
  // const upload = uploadPhoto();

  const resp = [];

  // signUpUser(firstName, lastName)
  //   .then((value) => { resp.push({ status: value.status, value: value.body }); },
  //     (message) => { resp.push({ status: 400, value: message }); });

  // uploadPhoto().then((value) => { resp.push({ status: 200, value }); },
  //   (message) => { resp.push({ status: 400, value: message }); });

  return Promise.all([signUpUser(firstName, lastName), uploadPhoto()])
    .then(([res1, res2]) => {
      resp.push({ status: res1.status, value: res1.body });
      resp.push({ status: 200, res2 });
    })
    .catch((reason) => { resp.push({ status: 400, value: reason }); });

  // return (resp);
}
