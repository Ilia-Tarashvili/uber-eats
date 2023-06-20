import { Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 43px;
  margin-bottom: 45px;
`;

const Number = styled.Text`
  font-family: "Uber-Move";
  font-size: 18px;
`;

const Btn = styled.Pressable``;

const minus = require("../../../assets/images/minus.png");

const plus = require("../../../assets/images/plus.png");

const IncDecBtn = ({ num, onPressPlus, onPressMinus }) => {
  return (
    <Container>
      <Btn onPress={onPressMinus}>
        <Image source={minus} />
      </Btn>
      <Number>{num}</Number>
      <Btn onPress={onPressPlus}>
        <Image source={plus} />
      </Btn>
    </Container>
  );
};

export default IncDecBtn;
