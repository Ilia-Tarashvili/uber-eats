import styled from "styled-components/native";
import { useState } from "react";
import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import * as ROUTES from "../constants/routes";

const Container = styled.Pressable`
  margin-bottom: 15px;
  margin-right: ${({ horiz }) => (horiz ? "16px" : "0px")};
  margin-top: 8px;
`;

const CardImage = styled.Image`
  width: 355px;
  height: 154px;
`;

const TitleWrapper = styled.View``;

const Title = styled.Text`
  font-family: "Uber-Move-Bold";
`;

const SubTitle = styled.Text`
  color: #6b6b6b;
  font-family: "Uber-Move";
`;

const Rating = styled.View``;

const RatingText = styled.Text`
  font-family: "Uber-Move";
`;

const CardBottom = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Promotion = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #34a853;
  width: 235px;
  height: 25px;
  margin-top: 21px;
  border-top-right-radius: 52px;
  border-bottom-right-radius: 52px;
`;

const PromotionText = styled.Text`
  color: #ffffff;
  font-family: "Uber-Move";
`;

const MainCard = ({
  imgUrl,
  title,
  price,
  deliveryTime,
  rating,
  promotion = false,
  promQuantity,
  promPrice,
  distance,
  onPress,
  horiz = false,
}) => {
  const [liked, setLiked] = useState(false);
  const [ratingValue, setRatingValue] = useState(rating);

  const handlePress = () => {
    setLiked(!liked);
    setRatingValue(liked ? ratingValue - 0.1 : ratingValue + 0.1);
  };

  return (
    <Container horiz={horiz} onPress={onPress}>
      <CardImage source={imgUrl} />
      <Icon
        name={liked ? "heart" : "heart-o"}
        size={25}
        color="white"
        onPress={handlePress}
        style={{ position: "absolute", right: 20, top: 20 }}
      />
      <CardBottom>
        <TitleWrapper>
          <Title>{title}</Title>
          {price && (
            <SubTitle>
              ${price} Delivery Fee | {deliveryTime} min
            </SubTitle>
          )}
          {distance && (
            <SubTitle>
              {deliveryTime} min | {distance} mi
            </SubTitle>
          )}
        </TitleWrapper>
        <Rating>
          <RatingText>{ratingValue.toFixed(1)}</RatingText>
        </Rating>
      </CardBottom>
      {promotion && (
        <Promotion>
          <PromotionText>
            {promQuantity} orders until ${promPrice} reward
          </PromotionText>
        </Promotion>
      )}
    </Container>
  );
};

export default MainCard;
