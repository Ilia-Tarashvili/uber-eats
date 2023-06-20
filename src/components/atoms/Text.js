import React from "react";
import styled from "styled-components/native";

const Txt = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "Uber-Move-Bold";
      case "Normal":
        return "Uber-Move";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;

const Text = ({ children, type = "Bold", size, ...otherProps }) => {
  <Txt type={type} size={size} {...otherProps}>
    {children}
  </Txt>;
};

export default Text;
