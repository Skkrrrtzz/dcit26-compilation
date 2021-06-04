// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
      options ={{ title:'Home', 
      headerStyle: {
        backgroundColor: "#ADEFD1"},headerTintColor: "#00203FFF",
        headerTitleStyle: {
            fontWeight: 'bold'
      } }}/>
      <Stack.Screen name="Profile" component={Profile}
      options ={{ title:'Profile', 
      headerStyle: {
        backgroundColor: "#00203FFF"}, headerTintColor: "#ADEFD1",
        headerTitleStyle: {
            fontWeight: 'bold'
       } }}/>
    </Stack.Navigator>
  );
};

export default HomeStack;

