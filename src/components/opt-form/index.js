import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
        <desc>chevron</desc>
        <path
          d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
          fill="#fff"
          fillRule="evenodd"
        ></path>
      </svg>
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};

export default OptForm;
