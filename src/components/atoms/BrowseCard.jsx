import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 11px;
`;

const CardImage = styled.Image``;

const Title = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 10px 0 10px 0;
  font-family: "Uber-Move";
`;

const BrowseCard = ({ imgUrl, title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default BrowseCard;
