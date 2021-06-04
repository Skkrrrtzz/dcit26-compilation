// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation})=>{
  return (
      <View style={styles.container}>
      <Image style={styles.picture} source={require('./kil.gif')} />
      
      <Text style={styles.text}>
      Killua is the heir to the Zoldyck family of assassins. Since birth, he went through extensive training to become the perfect killing machine. However, he eventually grew bored of killing, and decided to run away from home to become a Hunter.{'\n'}During his time taking the Hunter Exam, Killua met Gon Freecss, a boy his age who also wanted to become a Hunter. From then on, Gon and Killua grew to become good friends, even after Killua forfeited the Hunter Exam to protect Gon from Illumi, Killua's older brother who entered the exam to bring Killua home.{'\n'}After being taken back to his family home by Illumi, Gon came to rescue him, convincing Killua's father that Killua had made friends and should be allowed to choose his own path.
      </Text>
      <Ionicons.Button name="return-up-back" size={24} color="#ADEFD1" backgroundColor= "#00203FFF" onPress={()=>navigation.goBack()}> Go Back
      </Ionicons.Button>
      </View>
  );
}
export default About;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ADEFD1',
  },
  text:{
    textAlign:'justify',
    margin: 5,
    backgroundColor: '#ADEFD1',
    borderRadius: 5,
  },
  picture:{
    margin: 5,
    width: 350,
    height: 350, 
  }
  
});