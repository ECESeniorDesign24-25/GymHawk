import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./src/screens/MainPage";
import * as Font from "expo-font";

export type RootStackParamList = {
  MainPage: undefined;
};

const StackNavigator = createStackNavigator<RootStackParamList>();

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Avenir-bold": require("./fonts/AvenirNextLTPro-Bold.otf"),
        "Avenir-regular": require("./fonts/AvenirNextLTPro-Regular.otf")
      });
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#FFCD00",
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <StackNavigator.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
    </StackNavigator.Navigator>
  </NavigationContainer>
  );
}
