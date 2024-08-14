const handleCastError = (error) => {
  const errors = [
    {
      path: error.path,
      message: "Invalid ID!",
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error! Invalid ID provided!",
    errorMessages: errors,
  };
};

module.exports = handleCastError;
