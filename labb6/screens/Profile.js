// BSCS 3-3
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
// ESTACIO, DAN RENZO
//
import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { globalStyles } from '../styles/globalStyles';

const Profile = ({ route }) => {
  const data = route.params;
  return (
    <View style={globalStyles.container}>
      <Image
        style={globalStyles.picture1}
        source={{ uri: data.picture.large }}
      />
      <ScrollView style={globalStyles.container}>
        <Text style={globalStyles.text}>
          {data.name.title} {data.name.first} {data.name.last}
        </Text>

        <Ionicons name="person-circle" size={24} color="white">
          ABOUT
        </Ionicons>
        <Text style={globalStyles.text1}>
          Age: {data.dob.age}
          {'\n'}Birthday: {data.dob.date}
          {'\n'}Gender: {data.gender}
          {'\n'}Address: {data.location.street.number} {data.location.city},
          {data.location.state},{data.location.country}
        </Text>
        <AntDesign name="contacts" size={24} color="white">
          CONTACT
        </AntDesign>
        <Text style={globalStyles.text1}>
          Email: {data.email}
          {'\n'} Phone: {data.phone}
        </Text>
        <AntDesign name="ellipsis1" size={24} color="white">
          OTHERS
        </AntDesign>
        <Text style={globalStyles.text1}>
          DateRegistered: {data.registered.date}
        </Text>
      </ScrollView>
    </View>
  );
};
export default Profile;
