import React from "react";
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
      <MainProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Remedios"
            component={Remedios}
            options={headerOptions}
          />
          <Stack.Screen
            name="AdRemedio"
            component={AdRemedio}
            options={headerOptions}
          />
          <Stack.Screen
            name="EditaRemedio"
            component={EditaRemedio}
            options={headerOptions}
          />
        </Stack.Navigator>
      </MainProvider>
    </NavigationContainer>
  );
}

const headerOptions = {
  title: "Remédios",
  headerStyle: {
    backgroundColor: "#ADE0DB",
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#666666'
  },
  headerTitleAlign: "center",
  headerTintColor: "#66AF91",
  headerTitleStyle: {
    fontSize: 30
  },
};
