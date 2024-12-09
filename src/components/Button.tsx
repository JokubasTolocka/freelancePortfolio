import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Typography from "./Typography";
import FlipText from "./FlipTextAnimation";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  width: fit-content;
  padding: 12px 24px;
  cursor: pointer;
`;

type Props = {
  onClick: () => void;
};

const Button = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Typography variant="Heading5">
        <FlipText>{children}</FlipText>
      </Typography>
    </StyledButton>
  );
};

export default Button;
