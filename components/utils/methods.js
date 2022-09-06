export const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater("");
  }, 2500);
};

export const isValidObjField = (obj) => {
  return Object.values(obj).every((value) => value.trim());
};

export const isValidEmail = (value) => {
  const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regx.test(value);
};
