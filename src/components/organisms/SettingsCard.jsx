import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const SettingsCard = ({ imgUrl, title, onPress }) => {
  const Container = styled.Pressable`
    display: flex;
    flex-direction: row;
    gap: 25px;
    height: 56px;
    align-items: center;
  `;

  const Icon = styled.Image`
    height: 24px;
    width: 24px;
  `;

  const Title = styled.Text`
    font-family: "Uber-Move";
  `;

  return (
    <Container onPress={onPress}>
      <Icon source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default SettingsCard;
