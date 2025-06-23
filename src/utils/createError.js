const createError = (code, message) => {
  const errObj = new Error(message);
  errObj.code = code;
  throw errObj;
};

export default createError;
