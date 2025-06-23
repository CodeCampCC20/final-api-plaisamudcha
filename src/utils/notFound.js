const pageNotFound = (req, res) => {
  res.status(404).json({ message: "Page not found!!!" });
};

export default pageNotFound;
