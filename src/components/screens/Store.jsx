import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { FlatList, ScrollView, Text, View } from "react-native";
import Screen from "../atoms/Screen";
import Header from "../molecules/Header";
import SearchBar from "../atoms/SearchBar";
import CtgrBtn from "../atoms/CtgrBtn";
import GroceryItem from "../organisms/GroceryItem";
import CategoryItem from "../atoms/CategoryItem";
import { featured } from "../../data/appData";

const Container = styled(Screen)``;

const Search = styled(SearchBar)`
  margin-top: 12px;
  margin-bottom: 21px;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 47px;
  margin-bottom: 21px;
`;

const CtgrContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 18px;
`;

const ItemContainer = styled.View`
  padding-left: 16px;
  height: 275px;
`;

const ListHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 346px;
  margin-bottom: 15px;
`;

const MainTitle = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 18px;
`;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
  font-size: 16px;
  margin-right: 13px;
`;

const clock = require("../../../assets/images/groceryIcons/clock.png");
const coin = require("../../../assets/images/groceryIcons/coin.png");

const Store = ({ route, navigation }) => {
  const [featuredList, setFeaturedList] = useState(featured);

  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);

  const item = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const feature = () => {
    setData(featuredList);
  };

  const fetchData = () => {
    if (category === 0) {
      setData(featuredList);
    } else if (category === 1) {
      setData(featuredList.beverages);
    }
  };

  const btns = [
    { title: "Featured", value: 0 },
    { title: "Categories", value: 1 },
    { title: "Orders", value: 2 },
  ];

  const handlePress = (value) => {
    setCategory(value);
    console.log(value);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Header
          title={item.restaurant}
          onPressArrow={() => navigation.goBack()}
        />
        <Search />
        <InnerContainer>
          <CtgrBtn icon={clock} light title="In 60 minutes" />
          <CtgrBtn icon={coin} light title="Pricing and Fees" />
        </InnerContainer>
        <CtgrContainer>
          {btns.map((item, idx) => {
            return (
              <CtgrBtn
                title={item.title}
                key={idx}
                onPress={(e) => handlePress(item.value)}
                light={item.value === category ? false : true}
              />
            );
          })}
        </CtgrContainer>
        <ListHeader>
          <MainTitle>Fruits & Vegetables</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.fruitsandvegetables}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Beverages</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.beverages}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Frozen Foods</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.frozenfoods}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Pantry & Groceries</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.pantryandgroceries}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Pantry & Groceries</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.pantryandgroceries}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Meat, Seafood & Plant-Based</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.meat}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
        <ListHeader>
          <MainTitle>Cheese</MainTitle>
          <Title>see all</Title>
        </ListHeader>
        <ItemContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={featuredList.Cheese}
            horizontal={true}
            renderItem={(item) => (
              <GroceryItem
                title={item.item.title}
                imgUrl={item.item.imgUrl}
                price={item.item.price}
                subTitle={item.item.subTitle}
              />
            )}
          />
        </ItemContainer>
      </Container>
    </ScrollView>
  );
};

export default Store;
