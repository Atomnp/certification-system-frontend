import { createContext, useState } from "react";

export const APIRequestContext = createContext({});
// export const LoginContext = createContext({});

export const APIRequestProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("Loading...");
  const [toastData, setToastData] = useState({
    intent: "",
    title: "",
    message: "",
  });

  const showToastError = (message, title = "Error Occured") => {
    setToastData({
      intent: "danger",
      title: title,
      message: message,
    });
  };

  const showToastSuccess = (message, title = "Action Successfull") => {
    setToastData({
      intent: "success",
      title: title,
      message: message,
    });
  };

  const onToastClose = () => {
    setToastData({});
  };

  // const get_request_handler = () => {
  const request_handler = async (
    callback,
    success_message,
    failure_message
  ) => {
    setLoading(true);
    try {
      let res = await callback();
      //your code to be executed after 1 second
      setLoading(false);
      if (success_message) {
        showToastSuccess(success_message);
      } else if (res.data.message) {
        showToastSuccess(res.data.message);
      }
    } catch (err) {
      console.log("Error in request handler", err);
      //your code to be executed after 1 second
      setLoading(false);
      if (failure_message) {
        showToastError(failure_message);
      } else if (err.response && err.response.data) {
        showToastError(err.response.data);
      } else {
        showToastError(err.code);
      }
    }
  };
  //   };

  return (
    <APIRequestContext.Provider
      value={{
        toastData: toastData,
        request_handler: request_handler,
        onToastClose: onToastClose,
        loading: loading,
        setLoading: setLoading,
        loaderMessage,
        setLoaderMessage,
      }}
    >
      {props.children}
    </APIRequestContext.Provider>
  );
};
