// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet,Image,TouchableOpacity,FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./react.png')} />
        <View> 
        <Text style = {styles.title}>React Native Lab 4</Text>
        </View>
        <AntDesign.Button name="profile" size={24} color="#00203FF" backgroundColor= "#ADEFD1" onPress={()=>navigation.navigate('Profile')}> Profile 
        </AntDesign.Button>
      </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00203FFF'
  },
  title: {
    paddingVertical: 20,
    textAlign: "center",
    fontSize: 25,
    color: "#ADEFD1",
    fontWeight: "bold"
},
  picture:{
    borderRadius: 5,
    margin: 5,
    width: 250,
    height: 200, 
}
});