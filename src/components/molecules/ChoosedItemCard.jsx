import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 342px;
`;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 16px;
`;

const SubTitle = styled.Text`
  font-family: ${({ bold }) => (bold ? "Uber-Move-Bold" : "Uber-Move")};
  color: #6b6b6b;
  text-decoration: ${({ strike }) => (strike ? "line-through" : "none")};
`;

const InnerContainer = styled.View`
  margin-right: 28px;
  width: 196px;
`;

const RightContainer = styled.View`
  display: flex;
  align-items: flex-end;
`;

const RightInnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const coupon = require("../../../assets/images/icons/coupon.png");

const ChoosedItemCard = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Cantina Crispy Chicken</Title>
        <SubTitle>6 Wings/Side of Celery</SubTitle>
        <SubTitle bold>Ranch Dip</SubTitle>
      </InnerContainer>
      <RightContainer>
        <RightInnerContainer>
          <Image source={coupon} />
          <Title>US$13.18</Title>
        </RightInnerContainer>
        <View>
          <SubTitle bold strike>
            US$13.18
          </SubTitle>
        </View>
      </RightContainer>
    </Container>
  );
};

export default ChoosedItemCard;
