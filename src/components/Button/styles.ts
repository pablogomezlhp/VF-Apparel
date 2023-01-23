import styled from "styled-components";
import { shade } from "polished";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";
export type SizeVariant = "small" | "large";

interface ButtonContainerProps {
  variant: ButtonVariant;
  size: SizeVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: ${(props) => (props.size === "large" ? "133px" : "52px")};
  height: ${(props) => (props.size === "large" ? "40px" : "24px")};

  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.primary
      : props.theme["gray-300"]};
  color: ${(props) =>
    props.variant === "primary" ? props.theme.white : props.theme["gray-600"]};
  font-size: ${(props) => (props.size === "large" ? "12px" : "8px")};
  font-weight: ${(props) => (props.size === "large" ? "400" : "100")};
  letter-spacing: 1px;
  display: flex;
  padding: 10px;
  align-items: center;
  border: 0;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) =>
      props.variant === "primary"
        ? shade(0.2, props.theme.primary)
        : shade(0.2, props.theme["gray-300"])};
  }
`;
