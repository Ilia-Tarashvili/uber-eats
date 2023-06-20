import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

const TextContainer = styled.View`
  margin-left: 19px;
`;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 16px;
`;

const SubTitle = styled.Text`
  color: #6b6b6b;
`;

const InnerContainer = styled.View`
  width: 224px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 91px;
`;

const marker = require("../../../assets/images/groceryIcons/marker.png");

const arrow = require("../../../assets/images/groceryIcons/rightArrow.png");

const DeliveryAddressCard = ({ ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <InnerContainer>
        <Image source={marker} />
        <TextContainer>
          <Title>San Francisco Bay Area</Title>
          <SubTitle>John’s List</SubTitle>
        </TextContainer>
      </InnerContainer>
      <Image source={arrow} />
    </Container>
  );
};

export default DeliveryAddressCard;
