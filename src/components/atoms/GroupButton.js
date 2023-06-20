import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const Container = styled.Pressable`
  display: flex;
  width: 142px;
  height: 40px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 99px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  font-family: "Uber-Move";
`;

const imgUrl = require("../../../assets/images/groupOrder.png");

const GroupButton = ({ title, onPress, ...otherProps }) => {
  return (
    <Container {...otherProps} onPress={onPress}>
      <Image source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default GroupButton;
