import React from "react";
import { ButtonContainer, ButtonVariant, SizeVariant } from "./styles";

interface ButtonProps {
  variant?: ButtonVariant;
  text: string;
  onClick: () => void;
  size?: SizeVariant;
}

export function Button({
  variant = "primary",
  text,
  onClick,
  size = "large",
}: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} variant={variant} size={size}>
      {text}
    </ButtonContainer>
  );
}
