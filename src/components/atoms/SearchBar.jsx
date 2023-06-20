import { Image, Pressable } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 328px;
  gap: 11px;
  padding-left: 14px;
`;

const Input = styled.TextInput`
  font-family: "Uber-Move";
  font-size: 16px;
  height: 44px;
  width: 293px;
  color: #6b6b6b;
`;

const icon = require("../../../assets/images/groceryIcons/loupe.png");

const SearchBar = ({ ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Pressable onPress={() => console.log("pressed")}>
        <Image source={icon} />
      </Pressable>
      <Input placeholder="Search stores and produ..." />
    </Container>
  );
};

export default SearchBar;
