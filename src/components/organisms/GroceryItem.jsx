import { Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 143px;
  height: 100px;
`;

const PlusContainer = styled.View`
  width: 130px;
  flex-direction: row;
  justify-content: flex-end;
`;

const PlusBtn = styled.Pressable``;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 16px;
`;
const Price = styled.Text`
  font-family: "Uber-Move";
  margin-top: 2px;
  margin-bottom: 7px;
`;
const SubTitle = styled.Text`
  font-family: "Uber-Move";
  color: #6b6b6b;
`;

const plus = require("../../../assets/images/groceryIcons/plusBtn.png");

const GroceryItem = ({ title, imgUrl, price, subTitle }) => {
  return (
    <Container>
      <PlusContainer>
        <PlusBtn>
          <Image source={plus} />
        </PlusBtn>
      </PlusContainer>
      <Image source={imgUrl} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default GroceryItem;
