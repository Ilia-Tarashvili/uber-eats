import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../src/components/screens/Home";
import Baskets from "../src/components/screens/Baskets";
import Grocery from "../src/components/screens/Grocery";
import Browse from "../src/components/screens/Browse";
import * as ROUTES from "../src/components/constants/routes";
import DrawerNavigator from "./DrawerNavigator";
import Account from "../src/components/screens/Account";
import HomeIconActive from "../assets/images/tabBarIcons/HomeIconActive";
import AccountIcon from "../assets/images/tabBarIcons/AccountIcon";
import AccountIconActive from "../assets/images/tabBarIcons/AccountIconActive";
import HomeIcon from "../assets/images/tabBarIcons/HomeIcon";
import BrowseIcon from "../assets/images/tabBarIcons/BrowseIcon";
import BrowseIconActive from "../assets/images/tabBarIcons/BrowseIconActive";
import GroceryIcon from "../assets/images/tabBarIcons/GroceryIcon";
import GroceryIconActive from "../assets/images/tabBarIcons/GroceryIconActive";
import BasketsIcon from "../assets/images/tabBarIcons/BasketsIcon";
import BasketsIconActive from "../assets/images/tabBarIcons/BasketsIconActive";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <HomeIconActive />;
            } else {
              return <HomeIcon />;
            }
          },

          tabBarActiveTintColor: "#000",
        }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{
          title: "Browse",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <BrowseIconActive />;
            } else {
              return <BrowseIcon />;
            }
          },

          tabBarActiveTintColor: "#000",
        }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{
          title: "Grocery",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <GroceryIconActive />;
            } else {
              return <GroceryIcon />;
            }
          },

          tabBarActiveTintColor: "#000",
        }}
      />
      <Tab.Screen
        name={ROUTES.BASKETS_SCREEN}
        component={Baskets}
        options={{
          title: "Baskets",
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <BasketsIconActive />;
            } else {
              return <BasketsIcon />;
            }
          },

          tabBarActiveTintColor: "#000",
        }}
      />
      <Tab.Screen
        name={ROUTES.ACCOUNT_SCREEN}
        component={Account}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <AccountIconActive />;
            } else {
              return <AccountIcon />;
            }
          },

          tabBarActiveTintColor: "#000",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
