// BSCS 3-3
// ESTACIO, DAN RENZO
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
//
import React, {useState} from 'react';
import { Text, View, Button, StyleSheet,Image} from 'react-native';

import Samplemodal from './components/Samplemodal';

export default function App(){

  const [isBOpen, setBOpen]= useState(false);

  return (
    
    <View style={styles.container}>
      <View>
      <Text style = {styles.title}>React Native</Text>
      </View>
      <Button title = "PRESS ME" onPress = {() => setBOpen(true)} />
      <Samplemodal visible = {isBOpen} onClose = {() => setBOpen(false)} />
      
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink'
   },
  title: {
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "#61dafb",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  }
});