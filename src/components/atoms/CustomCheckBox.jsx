import React, { useState, version } from "react";
import CheckBox from "expo-checkbox";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const SubTitle = styled.Text`
  color: #545454;
  font-family: "Uber-Move";
`;

const Price = styled.Text`
  font-family: "Uber-Move";
`;

const CheckContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const CustomCheckBox = ({ title, subtitle, price, value }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <CheckContainer>
        <View>
          <Title>{title}</Title>
          {subtitle && <SubTitle>US${subtitle}/select options</SubTitle>}
        </View>
      </CheckContainer>
      {price && <Price>US${price} ea</Price>}
    </Container>
  );
};

export default CustomCheckBox;
