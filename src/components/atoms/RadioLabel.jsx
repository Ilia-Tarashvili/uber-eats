import { View, Text } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const Price = styled.Text`
  font-family: "Uber-Move";
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const RadioLabel = ({ title, price, checked, onPress }) => {
  return (
    <Container>
      <InnerContainer>
        <RadioButton
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={onPress}
          color="#333333"
        />
        <Title>{title}</Title>
      </InnerContainer>
      {price && <Price>US${price} ea</Price>}
    </Container>
  );
};

export default RadioLabel;
