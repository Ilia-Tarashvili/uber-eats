import { Image, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-left: 16px;
`;

const MainTitle = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 20px;
  margin-left: 16px;
`;

const InnerContainer = styled.View`
  width: 268px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CartIcon = styled.Pressable``;

const AccountIcon = styled.Pressable`
  margin-left: 7px;
  margin-right: 23px;
`;

const arrow = require("../../../assets/images/groceryIcons/leftArrow.png");

const person = require("../../../assets/images/groceryIcons/person.png");

const cart = require("../../../assets/images/groceryIcons/cart.png");

const Header = ({ onPressArrow, onPressAccount, onPressCart, title }) => {
  return (
    <Container>
      <InnerContainer>
        <Pressable onPress={onPressArrow}>
          <Image source={arrow} />
        </Pressable>
        <MainTitle>{title}</MainTitle>
      </InnerContainer>
      <AccountIcon onPress={onPressAccount}>
        <Image source={person} />
      </AccountIcon>
      <CartIcon onPress={onPressCart}>
        <Image source={cart} />
      </CartIcon>
    </Container>
  );
};

export default Header;
