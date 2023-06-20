import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Possible Unhandled Promise Rejection"]);

const Container = styled(Modalize)``;

const BottomSheet = ({
  bottomSheetRef,
  children,
  modalHeight,
  adjustContentHeight,
}) => {
  return (
    <Container modalHeight={modalHeight} ref={bottomSheetRef}>
      {children}
    </Container>
  );
};

export default BottomSheet;
