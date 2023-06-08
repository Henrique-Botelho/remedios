import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import MainProvider from "./context/mainContext";

import Remedios from "./pages/Remedios";
import AdRemedio from "./pages/AdRemedio";
import EditaRemedio from "./pages/EditaRemedio";

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#09456c" barStyle="light-content"  />
      <MainProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Remedios"
            component={Remedios}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AdRemedio"
            component={AdRemedio}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditaRemedio"
            component={EditaRemedio}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </MainProvider>
    </NavigationContainer>
  );
}
