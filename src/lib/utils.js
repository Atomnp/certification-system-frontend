let handle_errors = (err, setToastData, setloading) => {
  if (err.response.data) {
    setToastData({
      title: "Error",
      message: err.response.data,
      intent: "danger",
    });
    setloading(false);
  }
};

export default handle_errors;
