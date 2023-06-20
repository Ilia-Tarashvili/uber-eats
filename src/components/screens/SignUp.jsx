import React, { useState } from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

import Screen from "../atoms/Screen";
import Button from "../atoms/Button";
import { storeData } from "../helpers/manageStorage";
import * as ROUTES from "../constants/routes";

const Container = styled(Screen)``;

const MainTitle = styled.Text`
  font-family: "Uber-Move-Bold";
  color: #000;
  font-size: 32px;
  margin-bottom: 16px;
`;

const Arrow = styled.Pressable`
  margin-bottom: 36px;
`;

const InnerContainer = styled.View`
  margin-top: 16px;
  right: 56px;
`;

const Title = styled.Text`
  font-family: "Uber-Move";
  color: #879ea4;
  font-size: 16px;
  margin-bottom: 36px;
`;

const Input = styled.TextInput`
  width: 319px;
  height: 50px;
  font-family: "Uber-Move";
  font-size: 16px;
  padding-left: 12px;
  margin-bottom: 24px;
`;

const SignUp = ({ navigation }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const saveData = async () => {
    if (
      (form.username && form.email && form.password && form.confirmPassword) ===
      ""
    ) {
      alert("fill inputs to proceed");
    }
    storeData(form);
    navigation.navigate(ROUTES.SIGN_IN_SCREEN, {
      nameOfUser: form.username,
      passwordOfUser: form.password,
    });
  };

  return (
    <Container>
      <InnerContainer>
        <Arrow onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/images/groceryIcons/leftArrow.png")}
          />
        </Arrow>
        <MainTitle>Create account</MainTitle>
        <Title>Sign up to get started!</Title>
      </InnerContainer>
      <Input
        placeholder="Username"
        value={form.username}
        placeholderTextColor="#879EA4"
        onChangeText={(text) => setForm({ ...form, username: text })}
      />
      <Input
        placeholder="Email address"
        value={form.email}
        placeholderTextColor="#879EA4"
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <Input
        placeholder="Password"
        value={form.password}
        placeholderTextColor="#879EA4"
        onChangeText={(text) => setForm({ ...form, password: text })}
      />
      <Input
        placeholder="Confirm password"
        value={form.confirmPassword}
        placeholderTextColor="#879EA4"
        onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
      />
      <Button title="Sign up" onPress={saveData} />
    </Container>
  );
};

export default SignUp;
