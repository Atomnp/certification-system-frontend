import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { APIRequestContext } from "../context";
import { useContext } from "react";

/* show={toastData.message ? true : false}
          title={toastData.title}
          intent={toastData.intent}
          message={toastData.message}
          onClose={onToastClose} */
function MyToast() {
  const { toastData, onToastClose } = useContext(APIRequestContext);

  return (
    <ToastContainer className="p-3" position={"bottom-start"}>
      <Toast
        onClose={onToastClose}
        show={toastData.message ? true : false}
        delay={5000}
        bg={toastData.intent}
        autohide
        animation
      >
        <Toast.Header>
          <strong className="me-auto">{toastData.title}</strong>
        </Toast.Header>
        <Toast.Body>{JSON.stringify(toastData.message)}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;
