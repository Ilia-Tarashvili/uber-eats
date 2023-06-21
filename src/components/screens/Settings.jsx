import React, { useState } from "react";
import styled from "styled-components/native";

import PlacesCard from "../organisms/PlacesCard";
import ImagePicker from "../atoms/ImagePicker";
import { User } from "../helpers/UserProvider";

const Settings = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState(false);

  const Container = styled.View`
    padding: 20px;
    height: 100%;
    display: flex;
  `;

  const ProfilePic = styled.Image`
    width: 90px;
    height: 90px;
    margin-bottom: 5px;
    border-radius: 90px;
  `;

  const UserContainer = styled.View`
    display: flex;
    align-items: center;
    gap: 15px;
    height: 167px;
  `;

  const Name = styled.Text`
    font-size: 18px;
    font-family: "Uber-Move";
  `;
  const EditBtn = styled.Pressable``;

  const BtnText = styled.Text`
    color: #1d5c2e;
    font-size: 16px;
    font-weight: 500;
    font-family: "Uber-Move";
  `;

  const MainTitle = styled.Text`
    font-size: 18px;
    margin-top: 74px;
    margin-bottom: 20px;
    font-family: "Uber-Move";
  `;

  const InnerContainer = styled.View`
    gap: 24px;
  `;

  const Btn = styled.Pressable``;

  const OtherOptions = styled.Text`
    font-size: 18px;
    margin-top: 44px;
    margin-bottom: 24px;
    font-family: "Uber-Move";
  `;
  const SignOut = styled.Text`
    font-size: 16px;
    color: #1d5c2e;
    font-family: "Uber-Move";
  `;

  const Home = require("../../../assets/images/icons/home.png");

  const Work = require("../../../assets/images/icons/work.png");

  const imageUrl = require("../../../assets/images/profilePic.png");

  const user = User();

  return (
    <Container>
      <UserContainer>
        <ProfilePic source={imgUrl ? { uri: imgUrl } : imageUrl} />
        <Name>John Doe</Name>
        <ImagePicker title="EDIT ACCOUNT" callback={setImgUrl} />
      </UserContainer>
      <MainTitle>Saved places</MainTitle>
      <InnerContainer>
        <PlacesCard
          title="Home"
          subTitle="Add home"
          imgUrl={Home}
          onPress={() => console.log("monkey")}
        />
        <PlacesCard
          title="Home"
          subTitle="Add home"
          imgUrl={Work}
          onPress={() => console.log("gorrila")}
        />
      </InnerContainer>
      <Btn>
        <OtherOptions>Other Options</OtherOptions>
      </Btn>
      <Btn onPress={() => navigation.popToTop()}>
        <SignOut>Sign Out</SignOut>
      </Btn>
    </Container>
  );
};

export default Settings;
