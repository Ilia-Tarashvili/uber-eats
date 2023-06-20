import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  background-color: ${({ light }) => (light ? "#EEEEEE" : "#000")};
  width: 343px;
`;

const Title = styled.Text`
  font-family: "Uber-Move";
  color: ${({ black }) => (black ? "#000" : "#fff")};
`;

const TotalBtn = ({ onPress, title, black, light, ...otherProps }) => {
  return (
    <Container light={light} onPress={onPress} {...otherProps}>
      <Title black={black}>{title}</Title>
    </Container>
  );
};

export default TotalBtn;
