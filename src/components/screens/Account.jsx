import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { useState } from "react";

import SettingsCard from "../organisms/SettingsCard";
import { data } from "../../data/appData";
import { User } from "../helpers/UserProvider";
import { getData } from "../helpers/manageStorage";

const Account = ({ navigation }) => {
  const [accountData, setAccountData] = useState(data);

  const Container = styled.View`
    padding: 20px;
  `;

  const UserContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    height: 56px;
    margin-bottom: 11px;
  `;

  const ProfilePic = styled.Image``;

  const Name = styled.Text``;

  const handlePress = (str) => {
    navigation.navigate(str);
  };

  const user = getData();

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserContainer>
          <ProfilePic
            source={require("../../../assets/images/profilePic.png")}
          />
        </UserContainer>
        {accountData.map((item) => {
          return (
            <SettingsCard
              title={item.title}
              imgUrl={item.icon}
              key={item.id}
              onPress={() => handlePress(item.value)}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default Account;
