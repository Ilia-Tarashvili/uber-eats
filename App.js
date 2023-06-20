import AuthNavigator from "./navigators/AuthNavigator";
import UserProvider from "./src/components/helpers/UserProvider";

import { useCallback } from "react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Uber-Move": require("./assets/fonts/UberMove.otf"),
    "Uber-Move-Bold": require("./assets/fonts/UberMoveBold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();

  return (
    <UserProvider>
      <AuthNavigator />
    </UserProvider>
  );
};

export default App;
