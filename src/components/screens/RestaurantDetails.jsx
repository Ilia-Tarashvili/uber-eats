import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

import Screen from "../atoms/Screen";
import RestaurantDetailsCard from "../organisms/RestDetailsCard";
import RestDetailsCard from "../organisms/RestDetailsCard";
import GroupButton from "../atoms/GroupButton";
import BasketsCard from "../atoms/BasketsCard";
import * as ROUTES from "../constants/routes";
import { restData } from "../../data/appData";
import { useState } from "react";

const HeaderContainer = styled.View`
  gap: 5px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
`;

const RestTitle = styled.Text`
  font-size: 24px;
  width: 250px;
  font-family: "Uber-Move-Bold";
`;

const RestInfo = styled.Text`
  font-size: 16px;
  font-weight: 500;
  font-family: "Uber-Move";
`;
const WorkHours = styled.Text`
  color: #545454;
  font-family: "Uber-Move";
`;

const MainView = styled.ScrollView`
  padding: 0 16px 0 16px;
`;

const ratingImage = require("../../../assets/images/ratingStar.png");

const SectionTitle = styled.Text`
  font-size: 24px;
  font-family: "Uber-Move-Bold";
`;

const SectionContainer = styled.View`
  gap: 35px;
`;

const OrderOptions = styled.View`
  height: 151px;
`;

const GroupOrderBtn = styled(GroupButton)`
  margin: 18px 0 18px 0;
`;

const OrderSwitch = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const RightSwitch = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
`;
const LeftSwitch = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
`;

const OrderSubTitle = styled.Text`
  color: #6b6b6b;
  font-family: "Uber-Move";
`;
const OrderTitle = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const BottomText = styled.Text`
  color: #4ba457;
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const BottomContainer = styled.View`
  display: flex;
  margin-top: 38px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const RestaurantDetails = ({ route, navigation }) => {
  const rest = restData.restaurant;
  const popular = restData.mostPopular;

  const [restList, setRestList] = useState(restData);

  const calcRating = (num) => {
    if (num > 200) {
      return "200+ Rating";
    } else {
      return num;
    }
  };

  return (
    <MainView>
      <HeaderContainer>
        <RestTitle>{rest.name}</RestTitle>
        <InfoContainer>
          <View>
            <Image source={ratingImage} />
          </View>
          <RestInfo>
            {rest.rating}({calcRating(rest.ratingQuantity)}) · {rest.category} ·
            $$
          </RestInfo>
        </InfoContainer>
        <WorkHours>{rest.workingHours}</WorkHours>
        <WorkHours>Tap for hours info and more</WorkHours>
      </HeaderContainer>
      <OrderOptions>
        <GroupOrderBtn
          title="Group order"
          onPress={() => console.log("ordered meal for a group!")}
        />
        <OrderSwitch>
          <RightSwitch>
            <OrderTitle>Delivery</OrderTitle>
            <OrderSubTitle>25 - 35 min 1.7mi</OrderSubTitle>
          </RightSwitch>
          <LeftSwitch>
            <OrderTitle>Pickup</OrderTitle>
            <OrderSubTitle>5 - 15 min 1.7mi</OrderSubTitle>
          </LeftSwitch>
        </OrderSwitch>
      </OrderOptions>
      <SectionContainer>
        <SectionTitle>Most Popular</SectionTitle>
        {restList.mostPopular.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              onPress={() =>
                navigation.navigate(ROUTES.ORDER_DETAILS, {
                  ...item,
                  restaurantName: rest.name,
                  price: popular[idx].price,
                  desc: popular[idx].desc,
                  promotion: popular[idx].promo,
                })
              }
            />
          );
        })}
        <SectionTitle>Picked for you</SectionTitle>
        {restList.pickedForYou.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              onPress={() => console.log(item.title)}
            />
          );
        })}
        <SectionTitle>Starters</SectionTitle>
        {restList.starters.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              popular={item.popular}
            />
          );
        })}
        <SectionTitle>Salads</SectionTitle>
        {restList.salads.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              popular={item.popular}
            />
          );
        })}
        <SectionTitle>Our special Pizza</SectionTitle>
        {restList.ourSpecialPizza.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              popular={item.popular}
            />
          );
        })}
        <SectionTitle>Miscellaneous</SectionTitle>
        {restList.miscellaneous.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              popular={item.popular}
            />
          );
        })}
        <SectionTitle>Alcohol - Beer (Must be 21 to Purchase)</SectionTitle>
        {restList.alcohol.map((item, idx) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
              key={idx}
              promo={item.promo}
              popular={item.popular}
            />
          );
        })}
      </SectionContainer>
      <BottomContainer>
        <BottomText>Save US$25. Conditions apply</BottomText>
      </BottomContainer>
    </MainView>
  );
};

export default RestaurantDetails;
