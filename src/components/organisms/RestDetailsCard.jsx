import { Image, Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.View`
  width: ${({ imgUrl }) => (imgUrl ? "197px" : "287px")};
`;

const Title = styled.Text`
  font-size: 16px;
  font-family: "Uber-Move-Bold";
`;

const SubTitle = styled.Text`
  font-family: "Uber-Move";
`;

const Desc = styled.Text`
  color: #545454;
  font-family: "Uber-Move";
`;

const PromoText = styled.Text`
  color: #ffffff;
  font-family: "Uber-Move";
`;
const PromoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background-color: #34a853;
  border-radius: 25px;
  margin-top: 8px;
`;

const RestDetailsCard = ({
  title = "McMushroom Pizza",
  subtitle = "US$21.00",
  desc = "Garlic, olive oil base, mozarella, cremini mushrooms, ricotta, thyme, white truffle oil. Add arugula for an extra charge",
  imgUrl,
  promo,
  popular,
  onPress,
}) => {
  return (
    <Container onPress={onPress}>
      <LeftContainer imgUrl={imgUrl}>
        <Title>{title}</Title>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        {desc && <Desc>{desc}</Desc>}
        {popular && (
          <PromoContainer>
            <PromoText>Popular</PromoText>
          </PromoContainer>
        )}
        {promo && (
          <PromoContainer>
            <PromoText>Promo</PromoText>
          </PromoContainer>
        )}
      </LeftContainer>
      <Image source={imgUrl} />
    </Container>
  );
};

export default RestDetailsCard;
