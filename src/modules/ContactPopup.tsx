import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../contexts/GlobalContext/useGlobalContext";

const ContactPopup = () => {
  const { closeContactPopup } = useGlobalContext();

  document.body.style.overflow = "hidden";

  return (
    <DarkOverlay>
      <button onClick={closeContactPopup}>CLOSE CLOSE CLOSE</button>
    </DarkOverlay>
  );
};

export default ContactPopup;

const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
