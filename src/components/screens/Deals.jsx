import { Text, Container, Image, FlatList, View } from "react-native";
import styled from "styled-components/native";

import Screen from "../atoms/Screen";
import RewardsIcon from "../../../assets/images/RewardsIcon";
import OffersIcon from "../../../assets/images/OffersIcon";
import MainCard from "../organisms/MainCard";
import { useState } from "react";
import { OffersList, RewardsList } from "../../data/appData";

const Deals = ({ navigation, route }) => {
  const [types, setTypes] = useState(route.params.num === 1 ? 0 : 1);
  const [offerList, setOfferList] = useState(OffersList);
  const [rewardList, setRewardList] = useState(RewardsList);

  const Container = styled(Screen)``;

  const HeaderWrapper = styled.View`
    display: flex;
    flex-direction: row;
    height: 57px;
  `;
  const LabelContainer = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `;
  const Label = styled.Text`
    font-size: 18px;
    font-family: "Uber-Move";
  `;

  const Seperator = styled.View`
    height: 1px;
    border: 2px solid black;
    width: 100%;
    position: absolute;
    bottom: 0;
  `;

  const Wrapper = styled.View`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
  `;

  const HeaderComponent = () => {
    return (
      <HeaderWrapper>
        <Wrapper>
          <LabelContainer onPress={() => setTypes(0)}>
            <OffersIcon />
            <Label>Offers</Label>
          </LabelContainer>
          {types === 0 && <Seperator />}
        </Wrapper>
        <Wrapper>
          <LabelContainer onPress={() => setTypes(1)}>
            <RewardsIcon />
            <Label>Rewards</Label>
          </LabelContainer>
          {types === 1 && <Seperator />}
        </Wrapper>
      </HeaderWrapper>
    );
  };

  return (
    <Container>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        showsHorizontalScrollIndicator={false}
        data={types === 0 ? offerList : rewardList}
        renderItem={({ item }) => (
          <MainCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={item.price}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            promotion={item.promotion}
            promPrice={item.promPrice}
            promQuantity={item.promQuantity}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Deals;
