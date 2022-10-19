let handle_errors = (err, setToastData, setLoading) => {
  if (err.response.data) {
    setToastData({
      title: "Error",
      message: err.response.data,
      intent: "danger",
    });
  }
  console.log(err.response);
  setLoading(false);
};

export default handle_errors;
