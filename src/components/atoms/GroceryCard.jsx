import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${({ color }) => (color ? `background-color: ${color}` : "")}
  width: 166px;
  height: 158px;
  margin-bottom: 4px;
  padding: 20px 0;
`;

const Title = styled.Text`
  font-family: "Uber-Move";
  color: #fff;
`;

const TimeContainer = styled.View`
  height: 30px;
  background-color: #00000045;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
`;

const InnerContainer = styled.View`
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const GroceryCard = ({ imgUrl, title, color, onPress }) => {
  return (
    <Container color={color} onPress={onPress}>
      <InnerContainer>
        <Image source={imgUrl} />
        <TimeContainer>
          <Title>{title}</Title>
        </TimeContainer>
      </InnerContainer>
    </Container>
  );
};

export default GroceryCard;
