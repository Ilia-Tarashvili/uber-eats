import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  width: 258px;
  height: 52px;
  background-color: green;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
const Title = styled.Text`
  font-family: "Uber-Move";
  color: #ffffff;
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false }) => {
  return (
    <Container light={light} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
