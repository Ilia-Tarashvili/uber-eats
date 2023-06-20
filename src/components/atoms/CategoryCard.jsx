import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background-color: #e6e6e6;
`;

const ImageContainer = styled.View`
  width: 56px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CtgrImage = styled.Image``;

const Ctgr = styled.Text`
  text-align: center;
  font-family: "Uber-Move";
`;

const CtgrContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const CategoryCard = ({ onPress, imgUrl, title }) => {
  return (
    <CtgrContainer>
      <Container onPress={onPress}>
        <ImageContainer>
          <CtgrImage source={imgUrl} />
        </ImageContainer>
        <Ctgr>{title}</Ctgr>
      </Container>
    </CtgrContainer>
  );
};

export default CategoryCard;
