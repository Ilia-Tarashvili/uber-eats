import React, { useState } from "react";
import styled from "styled-components/native";
import Screen from "../atoms/Screen";
import ChoosedItemCard from "../molecules/ChoosedItemCard";
import RecommendedCard from "../molecules/RecommendedCard";
import { View } from "react-native";
import Checkbox from "expo-checkbox";
import TotalBtn from "../molecules/TotalBtn";
import * as ROUTES from "../constants/routes";
import { useNavigation } from "@react-navigation/native";
import { Context } from "react-native-portalize/lib/Host";
import { recommended } from "../../data/appData";

const Container = styled(Screen)`
  padding: 0 16px;
`;

const MainTitle = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 24px;
  width: 287px;
  text-align: center;
`;
const GreenTxt = styled.Text`
  font-family: "Uber-Move";
  color: #05a357;
`;

const Header = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 37px;
  margin-top: 33px;
`;

const Num = styled.Text`
  font-family: "Uber-Move";
  padding: 5px;
  margin-right: 14px;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const SubTotalContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 39px;
`;

const HelperContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 33px;
  margin-right: 42px;
`;

const CheckOutBtn = styled(TotalBtn)`
  margin-top: 37px;
  margin-bottom: 19px;
`;

const AddItemsBtn = styled(TotalBtn)`
  margin-bottom: 33px;
`;

const Recommendations = () => {
  const [recommendedList, setRecommendedList] = useState(recommended);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(ROUTES.TRACK_ORDER);
  };
  return (
    <Container>
      <Header>
        <MainTitle>Taco Bell (2255 Telegraph Avenue)</MainTitle>
        <GreenTxt>You‘re saving US$25</GreenTxt>
      </Header>
      <InnerContainer>
        <Num>1</Num>
        <ChoosedItemCard />
      </InnerContainer>
      {recommendedList.map((item) => {
        return <RecommendedCard title={item.title} key={item.id} />;
      })}
      <SubTotalContainer>
        <Title>Subtotal</Title>
        <Title>US$13.38</Title>
      </SubTotalContainer>
      <InnerContainer>
        <HelperContainer>
          <Title>Request utensils, etc.</Title>
          <Checkbox />
        </HelperContainer>
        <Title>Add note</Title>
      </InnerContainer>
      <CheckOutBtn title="Go to Checkout" onPress={handlePress} />
      <AddItemsBtn title="Add items" light black />
    </Container>
  );
};

export default Recommendations;
