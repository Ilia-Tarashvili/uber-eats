import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 40px;
  border-radius: 25px;
  padding: 0 16px;
  background-color: ${({ light }) => (light ? "#E6E6E6" : "#000")};
  gap: 10px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: ${({ light }) => (light ? "#000" : "#fff")};
  font-family: "Uber-Move";
`;

const Icon = styled.Image``;

const CtgrBtn = ({
  title,
  onPress,
  gap = false,
  light = false,
  icon,
  ...otherProps
}) => {
  return (
    <Container {...otherProps} gap={gap} light={light} onPress={onPress}>
      {icon && <Icon source={icon} />}
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default CtgrBtn;
