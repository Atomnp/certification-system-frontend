import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function MyToast({ onClose, show, title, intent, message }) {
  console.log(title, intent, message);
  return (
    <ToastContainer className="p-3" position={"bottom-start"}>
      <Toast
        onClose={onClose}
        show={show}
        delay={5000}
        bg={intent}
        autohide
        animation
      >
        <Toast.Header>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>{JSON.stringify(message)}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MyToast;
