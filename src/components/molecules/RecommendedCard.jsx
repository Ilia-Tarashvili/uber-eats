import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  height: 71px;
`;
const InnerContainer = styled.View`
  gap: 10px;
  width: 231px;
  margin-right: 66px;
`;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 16px;
`;

const SubTitle = styled.Text`
  font-family: "Uber-Move";
  color: #05a357;
`;

const PlusBtn = styled.Pressable``;

const imgUrl = require("../../../assets/images/icons/plus.png");

const RecommendedCard = ({ title }) => {
  return (
    <Container>
      <InnerContainer>
        <Title>{title}</Title>
        <SubTitle>Buy 1, get 1 free (add 2 to basket)</SubTitle>
      </InnerContainer>
      <PlusBtn>
        <Image source={imgUrl} />
      </PlusBtn>
    </Container>
  );
};

export default RecommendedCard;
