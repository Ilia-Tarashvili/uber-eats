import { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, View } from "react-native";

import BrowseCard from "../atoms/BrowseCard";
import Screen from "../atoms/Screen";
import Search from "../atoms/Search";
import * as ROUTES from "../constants/routes";
import { allCategories, topCategories } from "../../data/appData";

const Container = styled(Screen)``;

const SectionTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
  margin-left: 25px;
  margin-top: 11px;
  font-family: "Uber-Move-Bold";
`;

const Categories = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Browse = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [allList, setAllList] = useState(allCategories);
  const [topList, setTopList] = useState(topCategories);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Search onChangeText={(text) => setInput(text)} />
        <SectionTitle>Top categories</SectionTitle>
        <Categories>
          {topList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() =>
                  navigation.navigate(item.routeName, { num: item.type })
                }
              />
            );
          })}
        </Categories>
        <SectionTitle>All categories</SectionTitle>
        <Categories>
          {allList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            );
          })}
        </Categories>
      </ScrollView>
    </Container>
  );
};

export default Browse;
