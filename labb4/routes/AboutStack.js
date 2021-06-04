// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About}
       options ={{ title:'About', 
      headerStyle: {
        backgroundColor: "#00203FFF"},headerTintColor: "#ADEFD1",
        headerTitleStyle: {
            fontWeight: 'bold'
      } }}/>
    </Stack.Navigator>
  );
};

export default AboutStack;

