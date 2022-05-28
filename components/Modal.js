import { useState } from "react";
import styled from "styled-components";
import ReactModal, {
  ModalProvider,
  BaseModalBackground,
} from "styled-react-modal";

const StyledModal = ReactModal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => props.opacity};
  transition : all 0.2s ease-in-out;
  position:relative;
  .btn-close{
      position:absolute;
      top:5px;
      right:10px;
      border-radius:50%;
      background-color:transparent;
      border:none;
      cursor:pointer;
      width:28px;
      height:28px;
      font-size:1.4rem;
      line-height:28px;
      color:white;
      font-weight:100;

      &:active{
            // background-color:grey;
            opacity:0.6;
      }
    }
  `;

function FancyModalButton(props) {
  const [isOpen, setIsOpen] = useState(props.auto ? true : false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <div>
      {!props.auto && <button onClick={toggleModal}>Open modal</button>}
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        {...props}
      >
        {props.children}
        <button onClick={toggleModal} className="btn-close">
          &#10005;
        </button>
      </StyledModal>
    </div>
  );
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.2s ease-in-out;
`;

const Modal = (props) => {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <FancyModalButton {...props}>{props.children}</FancyModalButton>
    </ModalProvider>
  );
};

export default Modal;
