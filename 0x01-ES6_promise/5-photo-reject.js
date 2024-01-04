// export default function uploadPhoto(filename) {
//   return (new Promise((resolve, reject) => {
//     reject(Error(`${filename} cannot be processed`));
//   }));
// }

export default function uploadPhoto(filename) {
  return (Promise.reject(Error(`${filename} cannot be processed`)));
}
