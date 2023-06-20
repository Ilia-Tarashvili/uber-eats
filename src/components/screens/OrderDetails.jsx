import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Image, ScrollView, Text, View } from "react-native";

import Screen from "../atoms/Screen";
import Promotion from "../molecules/Promotion";
import RadioLabel from "../atoms/RadioLabel";
import CustomCheckBox from "../atoms/CustomCheckBox";

import IncDecBtn from "../molecules/IncDecBtn";
import TotalBtn from "../molecules/TotalBtn";
import Checkbox from "expo-checkbox";
import * as ROUTES from "../constants/routes";
import BottomSheet from "../atoms/BottomSheet";
import { Portal } from "react-native-portalize";
import ChoosedItemCard from "../molecules/ChoosedItemCard";
import Recommendations from "./Recommendations";
import { sauces, sizes, crusts, addOns, frequently } from "../../data/appData";

const Container = styled(Screen)`
  align-items: flex-start;
  padding: 17px;
  justify-content: flex-start;
`;

const RestaurantTitle = styled.Text`
  width: 255px;
  font-size: 24px;
  font-family: "Uber-Move-Bold";
`;

const Price = styled.Text`
  font-family: "Uber-Move";
  font-size: 20px;
  margin: 8px 0;
`;

const SubTitle = styled.Text`
  color: #545454;
  font-family: "Uber-Move";
  margin-bottom: 36px;
`;

const MainTitle = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 18px;
`;

const SecondaryText = styled.Text`
  color: #6b6b6b;
  font-family: "Uber-Move";
`;

const Header = styled.View`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 50px;
`;

const InnerContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const OrderDetails = ({ route, navigation }) => {
  const [saucesList, setSaucesList] = useState(sauces);
  const [sizesList, setSizesList] = useState(sizes);
  const [crustsList, setCrustsList] = useState(crusts);
  const [addOnsList, setAddOnsList] = useState(addOns);
  const [frequentlyList, setFrequentlyList] = useState(frequently);

  const { restaurantName, price, desc, promotion } = route.params;

  const [num, setNum] = useState(1);

  const [count, setCount] = useState(parseInt(price));

  const [Checked, setChecked] = useState(false);

  const [sizeArr, setSizeArr] = useState(sizes);

  const BottomSheetRef = useRef();

  const handlePress = (id, price) => {
    setCount((count) => count + (price ? price : 0));
    sizeArr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
        setChecked(true);
      }
    });
    saucesList.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  const handleCrustPress = (id, price) => {
    setCount((count) => count + (price ? price : 0));

    crustsList.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };
  const handleSizesPress = (id, price) => {
    setCount((count) => count + (price ? price : 0));

    sizesList.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <RestaurantTitle>{restaurantName}</RestaurantTitle>
          <Price>{price}</Price>
          <SubTitle>{desc}</SubTitle>
          {promotion && <Promotion />}
          <Header row center>
            <MainTitle>Choose your sauce</MainTitle>
            <SecondaryText>Required</SecondaryText>
          </Header>
          <View style={{ gap: 7 }}>
            {saucesList.map((item) => {
              return (
                <RadioLabel
                  title={item.title}
                  key={item.id}
                  onPress={() => handlePress(item.id)}
                  checked={item.isChecked}
                />
              );
            })}
          </View>
          <Header>
            <MainTitle>Get your sauce on the side</MainTitle>
            <SecondaryText>Choose up to 1</SecondaryText>
          </Header>
          <CustomCheckBox title="Sauce on the side" />
          <Header row center>
            <MainTitle>Choose your size</MainTitle>
            <SecondaryText>Required</SecondaryText>
          </Header>
          <View style={{ gap: 7 }}>
            {sizesList.map((item) => {
              return (
                <RadioLabel
                  title={item.title}
                  key={item.id}
                  price={item.price}
                  onPress={() => handleSizesPress(item.id, item.price)}
                  checked={item.isChecked}
                />
              );
            })}
          </View>
          <Header row center>
            <MainTitle>Choose your crust</MainTitle>
            <SecondaryText>Required</SecondaryText>
          </Header>
          <View style={{ gap: 7 }}>
            {crustsList.map((item) => {
              return (
                <RadioLabel
                  title={item.title}
                  key={item.id}
                  price={item.price}
                  onPress={() => handleCrustPress(item.id, item.price)}
                  checked={item.isChecked}
                />
              );
            })}
          </View>
          <Header>
            <MainTitle>Choose your add-ons</MainTitle>
            <SecondaryText>Choose up to 3</SecondaryText>
          </Header>
          <View style={{ gap: 7 }}>
            {addOnsList.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  value={item.isChecked}
                  onValueChange={() => handleCheckBox(item)}
                />
              );
            })}
          </View>
          <Header>
            <MainTitle>Frequently brought together</MainTitle>
          </Header>
          <View style={{ gap: 7 }}>
            {frequentlyList.map((item) => {
              return (
                <Checkbox
                  // value={isChecked}
                  // onValueChange={setIsChecked}
                  // color={isChecked ? "#4630EB" : undefined}
                  key={item.id}
                />
              );
            })}
          </View>
          <IncDecBtn
            num={num}
            onPressMinus={() => setNum(num - 1)}
            onPressPlus={() => setNum(num + 1)}
          />
          <InnerContainer>
            <TotalBtn
              title="Add 2 to basket/US$16.99 "
              num={num}
              onPress={() => BottomSheetRef.current.open()}
            />
          </InnerContainer>
        </Container>
      </ScrollView>
      <Portal>
        <BottomSheet bottomSheetRef={BottomSheetRef} modalHeight={634}>
          <Recommendations />
        </BottomSheet>
      </Portal>
    </View>
  );
};

export default OrderDetails;
