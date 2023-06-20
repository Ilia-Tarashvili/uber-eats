import styled from "styled-components/native";
import { Pressable, Text } from "react-native";
import { useState } from "react";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import LoginScreenImage from "../../../assets/images/LoginImage.png";
import * as ROUTES from "../constants/routes";
import { UpdateUser, User } from "../helpers/UserProvider";

const Container = styled(Screen)`
  display: flex;
  align-items: center;
  margin-top: 30%;
`;

const LoginImage = styled.Image`
  margin-bottom: 54px;
`;
const Input = styled.TextInput`
  font-size: 15px;
  width: 258px;
  height: 52px;
  background-color: #bde0ec;
  border-radius: 16px;
  margin-bottom: 10px;
  padding-left: 10px;
`;
const SignUpSuggestion = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-bottom: 20px;
`;
const ForgotPassword = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  gap: 5px;
  margin-bottom: 50px;
`;

const SignUpText = styled.Text`
  color: blue;
`;

const Txt = styled.Text``;

const SignInScreen = ({ navigation, route }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!route.params) {
      alert("credentials are incorrect or inputs are empty");
    } else if (
      userName === route.params.nameOfUser &&
      password === route.params.passwordOfUser
    ) {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
    }
  };

  return (
    <Container>
      <LoginImage source={LoginScreenImage} />
      <Input
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.nativeEvent.text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <Button title="Sign in" onPress={handleSubmit} />
      <ForgotPassword>
        <Txt>Forgot password?</Txt>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpText>Reset</SignUpText>
        </Pressable>
      </ForgotPassword>
      <SignUpSuggestion>
        <Txt>Don't have an account yet?</Txt>
        <Pressable onPress={() => navigation.navigate(ROUTES.SIGN_UP_SCREEN)}>
          <SignUpText>Sign up</SignUpText>
        </Pressable>
      </SignUpSuggestion>
    </Container>
  );
};
export default SignInScreen;
