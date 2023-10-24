const errorHandler = (err, req, res, next) => {
    console.log(err);
  
    if (err.name == "Data not found") {
      res.status(400).json({ message: "List not available" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports = errorHandler;
  