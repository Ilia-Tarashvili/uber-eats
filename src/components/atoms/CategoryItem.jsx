import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  width: 319px;
`;

const Title = styled.Text`
  font-family: "Uber-Move";
  font-size: 16px;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const Arrow = styled.Image`
  margin-right: 26px;
`;

const CategoryItem = ({ imgUrl, title }) => {
  return (
    <Container>
      <InnerContainer>
        <Image source={imgUrl} />
        <Title>{title}</Title>
      </InnerContainer>
      <Arrow
        source={require("../../../assets/images/groceryIcons/smallArrow.png")}
      />
    </Container>
  );
};

export default CategoryItem;
