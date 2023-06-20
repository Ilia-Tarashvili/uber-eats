import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Host } from "react-native-portalize";

import * as ROUTES from "../src/components/constants/routes";
import SignInScreen from "../src/components/screens/SignInScreen";
import ForgotPassword from "../src/components/screens/ForgotPassword";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../src/components/screens/RestaurantDetails";
import Deals from "../src/components/screens/Deals";
import Settings from "../src/components/screens/Settings";
import OrderDetails from "../src/components/screens/OrderDetails";
import Recommendations from "../src/components/screens/Recommendations";
import TrackOrder from "../src/components/screens/TrackOrder";
import Store from "../src/components/screens/Store";
import SignUp from "../src/components/screens/SignUp";

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.SIGN_IN_SCREEN}
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.REST_DETAILS}
            component={RestaurantDetails}
            options={{ headerShown: true, title: "Restaurant Details" }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.SETTINGS_SCREEN}
            component={Settings}
            options={{ title: "Settings", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_DETAILS}
            component={OrderDetails}
            options={{ title: "Order Details" }}
          />
          <Stack.Screen
            name={ROUTES.RECOMMENDATIONS}
            component={Recommendations}
            options={{ title: "Recommendations" }}
          />
          <Stack.Screen
            name={ROUTES.TRACK_ORDER}
            component={TrackOrder}
            options={{ title: "Track Order" }}
          />
          <Stack.Screen
            name={ROUTES.STORE_SCREEN}
            component={Store}
            options={{ title: "Track Order", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUp}
            options={{ title: "Sign Up", headerShown: false }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;
