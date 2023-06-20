import { ScrollView, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { useEffect, useRef, useState } from "react";
import { Portal } from "react-native-portalize";

import BottomSheet from "../atoms/BottomSheet";
import Screen from "../atoms/Screen";
import MainCard from "../organisms/MainCard";
import CtgrBtn from "../atoms/CtgrBtn";
import * as ROUTES from "../constants/routes";
import CategoryCard from "../atoms/CategoryCard";
import {
  deliveryList,
  pickupList,
  dineinList,
  ctgrList,
  horizontalList,
} from "../../data/appData";

const Container = styled(Screen)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SortContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
`;

const LocationContainer = styled.View`
  height: 25px;
  margin: 28px 0 24px 0;
`;

const LocationContent = styled.Text`
  font-size: 19px;
  font-family: "Uber-Move-Bold";
`;

const CtgrContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 31px;
  gap: 5px;
`;

const CtgrMap = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const HomeView = styled.View`
  display: flex;
  align-items: center;
`;

const FlatView = styled.View`
  margin-left: 17px;
`;

const Home = ({ navigation }) => {
  const [deliveryData, setDeliveryData] = useState(deliveryList);
  const [pickupData, setPickupData] = useState(pickupList);
  const [ctgrData, setCtgrData] = useState(ctgrList);
  const [dineinData, setDineinData] = useState(dineinList);
  const [horizontalData, sethorizontalData] = useState(horizontalList);
  const [category, setCategory] = useState(0);
  const [data, setData] = useState([]);
  const categorySheetRef = useRef();

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    if (category === 0) {
      setData(deliveryData);
    } else if (category === 1) {
      setData(pickupData);
    } else if (category === 2) {
      setData(dineinData);
    }
  };

  const handlePress = (value) => {
    setCategory(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-in", value: 2 },
  ];

  return (
    <View>
      <Container>
        <SortContainer>
          {btns.map((item, idx) => {
            return (
              <CtgrBtn
                title={item.title}
                onPress={(e) => handlePress(item.value)}
                key={idx}
                light={item.value === category ? false : true}
              />
            );
          })}
        </SortContainer>

        <LocationContainer>
          <LocationContent>Now ⋅ London Hall</LocationContent>
        </LocationContainer>

        <CtgrContainer>
          <CategoryCard title={ctgrData[0].title} imgUrl={ctgrData[0].imgUrl} />
          <CategoryCard title={ctgrData[1].title} imgUrl={ctgrData[1].imgUrl} />
          <CategoryCard title={ctgrData[2].title} imgUrl={ctgrData[2].imgUrl} />
          <CategoryCard
            title="More"
            imgUrl={require("../../../assets/images/three-dots.png")}
            onPress={() => categorySheetRef.current.open()}
          />
        </CtgrContainer>

        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeView>
            {data.map((item) => {
              return (
                <MainCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={category === 0 ? item.price : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={category === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  distance={category === 1 ? item.distance : ""}
                  onPress={() =>
                    navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
                  }
                />
              );
            })}
          </HomeView>
          <FlatView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={horizontalData}
              renderItem={({ item }) => (
                <MainCard
                  horiz
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={category === 0 ? item.price : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={category === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  distance={category === 1 ? item.distance : ""}
                  onPress={() =>
                    navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </FlatView>
          <HomeView>
            {deliveryData.map((item) => {
              return (
                <MainCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={category === 0 ? item.price : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={category === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  distance={category === 1 ? item.distance : ""}
                  onPress={() =>
                    navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
                  }
                />
              );
            })}
          </HomeView>
          <FlatView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={horizontalData}
              renderItem={({ item }) => (
                <MainCard
                  horiz
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={category === 0 ? item.price : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={category === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  distance={category === 1 ? item.distance : ""}
                  onPress={() =>
                    navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
                  }
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </FlatView>
        </ScrollView>
      </Container>
      <Portal>
        <BottomSheet modalHeight={450} bottomSheetRef={categorySheetRef}>
          <CtgrMap>
            {ctgrData.map((item) => (
              <CategoryCard
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
                key={item.id}
              />
            ))}
          </CtgrMap>
        </BottomSheet>
      </Portal>
    </View>
  );
};

export default Home;
