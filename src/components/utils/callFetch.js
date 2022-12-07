let is_ok = true;

export const callFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject("Error en la llamada de productos");
      }
    }, time);
  });
}
