// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';


const Drawer = createDrawerNavigator();

const MainNavigator=()=>{
  
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContentOptions={{
    activeTintColor: 'white'
  }} 
    drawerStyle={{
    backgroundColor: "#ADEFD1" ,
    width: 240}}>
                <Drawer.Screen name="Home" component={HomeStack}
                options ={{ title:'Home', 
                drawerIcon: ({focused,size})=> ( 
                  <AntDesign name="home" size={24} color="#00203FF" backgroundColor= "#ADEFD1"/> )}}/>
                <Drawer.Screen name="About" component={AboutStack}
                options ={{ title:'About', 
                drawerIcon: ({focused,size})=> ( 
                  <AntDesign name="infocirlceo" size={24} color="#00203FF" backgroundColor= "#ADEFD1"/> )}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
