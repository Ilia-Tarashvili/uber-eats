import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("screen").height;
const windowWidth = Dimensions.get("screen").width;

const MainWrapper = styled.KeyboardAvoidingView``;

const Container = styled.SafeAreaView`
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
`;

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

const Screen = ({ children, ...otherProps }) => {
  return (
    <MainWrapper behavior={Platform.OS === "android" ? "padding" : "height"}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Container {...otherProps}>{children}</Container>
    </MainWrapper>
  );
};

export default Screen;
