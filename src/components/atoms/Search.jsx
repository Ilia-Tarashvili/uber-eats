import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Input = styled.TextInput`
  font-size: 16px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  height: 44px;
  width: 343px;
  padding-left: 16px;
  margin-left: 16px;
  margin-top: 6px;
  border-radius: 99px;
`;

const SearchButton = styled.Pressable``;

const Search = ({ onChangeText }) => {
  return (
    <Container>
      <SearchButton>
        <Image
          source={require("../../../assets/images/BrowseScreenImages/SearchIcon.png")}
        />
      </SearchButton>
      <Input
        placeholder="Food, shopping, drinks, etc"
        placeholderTextColor="#000"
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Search;
