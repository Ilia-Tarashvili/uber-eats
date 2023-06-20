import React from "react";
import styled from "styled-components/native";
import * as ImgPicker from "expo-image-picker";

const Container = styled.Pressable``;

const Title = styled.Text`
  color: #1d5c2e;
  font-size: 16px;
  font-family: "Uber-Move";
`;

const ImagePicker = ({ title, callback }) => {
  const onPressHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const LaunchRes = await ImgPicker.launchImageLibraryAsync();
      callback(LaunchRes.uri);
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        callback(response.uri);
      }
    }
  };

  return (
    <Container onPress={onPressHandler}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ImagePicker;
