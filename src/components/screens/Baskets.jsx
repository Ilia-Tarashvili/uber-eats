import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { useState } from "react";

import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";
import BasketsCard from "../atoms/BasketsCard";
import { basketData } from "../../data/appData";

const Container = styled(Screen)`
  display: flex;
  justify-content: flex-start;
  margin-top: 100px;
`;

const InnerContainer = styled.View`
  display: flex;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  font-family: "Uber-Move";
`;
const SubTitle = styled.Text`
  width: 297px;
  text-align: center;
  font-size: 16px;
  color: #545454;
  font-weight: 400;
  margin-bottom: 38px;
  font-family: "Uber-Move";
`;

const StartBtn = styled(CtgrBtn)``;

const OrdersBtn = styled(CtgrBtn)`
  position: absolute;
  right: 17px;
  top: 13px;
`;

const imageUrl = require("../../../assets/images/OrdersIcon.png");

const MainTitle = styled.Text`
  font-size: 36px;
  left: 15px;
  top: 40px;
  font-family: "Uber-Move-Bold";
`;

const DataWrapper = styled.View``;

const BasketHeader = styled.View`
  height: 89px;
`;

const Baskets = ({ navigation }) => {
  const [data, setData] = useState(false);
  const [basketList, setBasketList] = useState(basketData);

  return (
    <>
      <BasketHeader>
        <MainTitle>Carts</MainTitle>
        <OrdersBtn
          title="Orders"
          light
          icon={imageUrl}
          onPress={() => console.log("pressed")}
        />
      </BasketHeader>
      {data ? (
        <DataWrapper>
          {basketList.map((item) => {
            return (
              <BasketsCard
                title={item.title}
                subTitle={item.subTitle}
                desc={item.desc}
                imageUrl={item.imageUrl}
                key={item.id}
                onPress={() => console.log("clicked")}
              />
            );
          })}
        </DataWrapper>
      ) : (
        <Container>
          <InnerContainer>
            <Image source={require("../../../assets/images/ShopCart.png")} />
            <Title>Add items to start a basket</Title>
            <SubTitle>
              Once you add items from a restuarant or store, your basket will
              appear here.
            </SubTitle>
            <StartBtn
              title="Start Shopping"
              onPress={() => console.log("you clicked me")}
            />
          </InnerContainer>
        </Container>
      )}
    </>
  );
};

export default Baskets;
