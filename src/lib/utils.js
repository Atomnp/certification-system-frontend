let handle_errors = (err, set, setLoading, setToastData) => {
  if (err.response && err.response.data) {
    setToastData({
      title: "Error",
      message: err.response.data,
      intent: "danger",
    });
  } else {
    setToastData({
      title: "Error",
      message: err.code,
      intent: "danger",
    });
  }
  setLoading(false);
};

export default handle_errors;
