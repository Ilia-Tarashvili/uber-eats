import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const PlacesCard = ({ imgUrl, title, subTitle, onPress }) => {
  const Container = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  `;

  const InnerContainer = styled.View``;

  const Title = styled.Text`
    font-size: 16px;
    font-family: "Uber-Move";
  `;

  const SubTitle = styled.Text`
    font-size: 12px;
    color: #6b6b6b;
    font-family: "Uber-Move";
  `;

  return (
    <Container onPress={onPress}>
      <Image source={imgUrl} />
      <InnerContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </InnerContainer>
    </Container>
  );
};

export default PlacesCard;
