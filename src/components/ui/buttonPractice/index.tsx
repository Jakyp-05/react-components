import React from "react";
import styled from "styled-components";

type IProps = {
  children: React.ReactNode;
  variant: "global" | "second";
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  type?: "reset" | "submit" | "button" | "undefined";
};

const ButtonPractice = styled.button<IProps>`
  width: ${(props) =>
    props.size === "sm"
      ? "110px"
      : props.size === "md"
      ? "189px"
      : props.size === "lg"
      ? "192px"
      : props.size === "xl"
      ? "217px"
      : props.size === "2xl"
      ? "295px"
      : "110px"};
  height: ${(props) =>
    props.size === "sm"
      ? "40px"
      : props.size === "md"
      ? "40px"
      : props.size === "lg"
      ? "56px"
      : props.size === "xl"
      ? "56px"
      : props.size === "2xl"
      ? "56px"
      : "40px"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "global"
      ? "#1064E5"
      : props.variant === "second"
      ? "transparent"
      : "#1064E5"};
  border: 2px solid
    ${(props) =>
      props.variant === "global"
        ? "#1064E5"
        : props.variant === "second"
        ? "#1064E5"
        : "#1064E5"};
  color: ${(props) =>
    props.variant === "global"
      ? "#ffffff"
      : props.variant === "second"
      ? "#061224E5"
      : "#ffffff"};
  cursor: pointer;
  border-radius: 100px;
  font-size: ${(props) =>
    props.size === "sm"
      ? "14px"
      : props.size === "md"
      ? "14px"
      : props.size === "lg"
      ? "12px"
      : props.size === "xl"
      ? "14px"
      : props.size === "2xl"
      ? "16px"
      : "12px"};
  font-weight: ${(props) =>
    props.size === "sm"
      ? "500"
      : props.size === "md"
      ? "500"
      : props.size === "lg"
      ? "600"
      : props.size === "xl"
      ? "700"
      : props.size === "2xl"
      ? "700"
      : "500"};
  line-height: ${(props) =>
    props.size === "sm"
      ? "24px"
      : props.size === "md"
      ? "24px"
      : props.size === "lg"
      ? "20px"
      : props.size === "xl"
      ? "24px"
      : props.size === "2xl"
      ? "20px"
      : "20px"};
  text-transform: uppercase;
`;

const ButtonPr: React.FC<IProps> = ({
  children,
  variant,
  size,
  onClick,
  type,
}) => {
  return (
    <ButtonPractice variant={variant} size={size} onClick={onClick} type={type}>
      {children}
    </ButtonPractice>
  );
};

export default ButtonPr;
