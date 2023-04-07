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
          <Stack.Screen name="Remedios" component={Remedios} options={{
            title: 'Remédios',
            headerStyle: {
              backgroundColor: '#ADE0DB',
              height: 90
            },
            headerTitleAlign: 'center',
            headerTintColor: '#66AF91',
            headerTitleStyle: {
              fontSize: 30
            }
          }} />
          <Stack.Screen name="AdRemedio" component={AdRemedio} />
          <Stack.Screen name="EditaRemedio" component={EditaRemedio} />
        </Stack.Navigator>
      </MainProvider>
    </NavigationContainer>
  );
}
