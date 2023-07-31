import React from "react";
import Todo from "./src/Screens/Todo";
import store from "./src/Redux/Store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./src/Screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              return (
                <Ionicons
                  name={route.name === "Todo" ? "ios-list" : "ios-settings"}
                  size={size}
                  color={color}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "#e7b34c",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Todo App" component={Todo} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
