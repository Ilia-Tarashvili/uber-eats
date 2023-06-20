import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  justify-content: space-evenly;
`;

const CardImage = styled.Image`
  border-radius: 35px;
`;

const InfoContainer = styled.View`
  margin: 0 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const SubTitle = styled.Text`
  color: #6b6b6b;
  font-weight: 400;
`;

const Icon = styled.Image``;

const BasketsCard = ({ onPress, imageUrl, title, subTitle, desc }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={imageUrl} />
      <InfoContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <SubTitle>{desc}</SubTitle>
      </InfoContainer>
      <Icon source={require("../../../assets/images/arrowRight.png")} />
    </Container>
  );
};

export default BasketsCard;
