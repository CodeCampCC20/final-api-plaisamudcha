const errorMiddleware = (err, req, res, next) => {
  res
    .status(err.code || 500)
    .json({ message: err.message || "Server internal error" });
};

export default errorMiddleware;
