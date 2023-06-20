import styled from "styled-components/native";

import Screen from "../atoms/Screen";
import GroceryCard from "../atoms/GroceryCard";
import SearchBar from "../atoms/SearchBar";
import Header from "../molecules/Header";
import DeliveryAddressCard from "../molecules/DeliveryAddressCard";
import * as ROUTES from "../constants/routes";
import { useState } from "react";
import { groceryData } from "../../data/appData";

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

const Search = styled(SearchBar)`
  margin-bottom: 18px;
  margin-top: 12px;
`;

const DeliveryAddress = styled(DeliveryAddressCard)`
  margin-bottom: 35px;
`;

const Grocery = ({ navigation }) => {
  const [groceryList, setGroceryList] = useState(groceryData);

  return (
    <Container>
      <Header
        title="Stores"
        onPressCart={() => console.log("cart")}
        onPressAccount={() => console.log("account")}
        onPressArrow={() => navigation.goBack()}
      />
      <Search />
      <DeliveryAddress />
      <InnerContainer>
        {groceryList.map((item) => (
          <GroceryCard
            color={item.color}
            title={item.title}
            key={item.id}
            imgUrl={item.imgUrl}
            onPress={() =>
              navigation.navigate(ROUTES.STORE_SCREEN, {
                restaurant: item.restaurant,
              })
            }
          />
        ))}
      </InnerContainer>
    </Container>
  );
};

export default Grocery;
