// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./a.jpg')} />
      <Text style = {styles.title}>Killua Zoldyck</Text>
      <Text style={styles.text}>"Electricity doesn't hurt me. When I said it doesn't hurt me, it means I can bare it. None the less, I feel the pain. That's why I'm a bit annoyed..."</Text>
        <Ionicons.Button name="return-down-back" size={24} color="#ADEFD1" backgroundColor= "#00203FFF" onPress={()=>navigation.goBack()}> Go Back Home
        </Ionicons.Button>
      </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ADEFD1'
  },
  picture:{
    borderRadius: 5,
    margin: 5,
    width: 350,
    height: 200, 
  },
  title: {
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: "#ADEFD1",
    textAlign: "center",
    fontSize: 25,
    color: "#00203FFF",
    fontWeight: "bold"
},
  text:{
    textAlign:'justify',
    margin: 5,
    backgroundColor: '#ADEFD1',
    borderRadius: 5,
  }
});