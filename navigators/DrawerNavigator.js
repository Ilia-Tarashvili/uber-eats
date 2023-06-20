import { createDrawerNavigator } from "@react-navigation/drawer";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Require cycle"]);

import * as ROUTES from "../src/components/constants/routes";
import BottomTabNavigator from "./BottomTabNavigator";
import Baskets from "../src/components/screens/Baskets";
import Grocery from "../src/components/screens/Grocery";
import Browse from "../src/components/screens/Browse";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse" }}
      />
      <Drawer.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ title: "Grocery" }}
      />
      <Drawer.Screen
        name={ROUTES.BASKETS_SCREEN}
        component={Baskets}
        options={{ title: "Baskets" }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
