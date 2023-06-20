import styled from "styled-components/native";

import Button from "../atoms/Button";
import Screen from "../atoms/Screen";
import * as ROUTES from "../constants/routes";

const LogIn = ({ navigation, route }) => {
  const Container = styled(Screen)`
    display: flex;
    align-items: center;
    margin-top: 40%;
  `;
  const Input = styled.TextInput`
    font-size: 15px;
    width: 258px;
    height: 52px;
  `;

  return (
    <Container>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button title="Log in" />
      <Button
        title="cancel"
        onPress={() => navigation.navigate(ROUTES.SIGN_IN_SCREEN)}
      />
    </Container>
  );
};

export default LogIn;
