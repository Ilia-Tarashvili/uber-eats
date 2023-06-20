import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  background-color: #e9ffef;
  width: 342px;
  height: 79px;
  border-radius: 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
`;

const PromoTxt = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;
const PromoSubTxt = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move";
`;

const imgUrl = require("../../../assets/images/i.png");

const Promotion = () => {
  return (
    <Container>
      <View>
        <PromoTxt>Promotion applied</PromoTxt>
        <PromoSubTxt>View basket for final discount</PromoSubTxt>
      </View>
      <View>
        <Image source={imgUrl} />
      </View>
    </Container>
  );
};

export default Promotion;
