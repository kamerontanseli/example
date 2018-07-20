export const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const ajax = (...args) => fetch(...args).then(handleErrors);

export const ajaxJSON = (...args) =>
  fetch(...args)
    .then(handleErrors)
    .then(r => r.json());
