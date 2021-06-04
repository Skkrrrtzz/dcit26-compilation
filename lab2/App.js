// BSCS 3-3
//ESTACIO, DAN RENZO
// GAJETE,KERTZ HENRICH R.
// LOZANO,AL LORENZE
//
import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput,FlatList} from 'react-native';

export default function App() {
  const [eGoal,setEenGoal]= useState('');
  const [cGoal,setCenGoal]= useState([]);
  const goalIntH=(enteredText) => {
    setEenGoal(enteredText);
  };
  const addGoalH=()=>{
    setCenGoal(currentGoals => [...currentGoals,{ key: Math.random().toString(),value: eGoal }]);
    setEenGoal('');
  };
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>React Native Add Course Goals</Text>
        <View style = {styles.inputcontainer}>
      <TextInput placeholder="Course Goal" style={styles.textBox} onChangeText={goalIntH} value={eGoal}/>
        <Button title = "ADD" onPress={addGoalH}/>
      </View>
        <FlatList
      data={cGoal}
      renderItem={itemData =>(
          <View style={styles.items}>
            <Text>{itemData.item.value}</Text>
      </View>
    )}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: 'lightpink'
  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
    textBox: {
    width: 200, 
    padding: 7,
    borderColor:'white',
    borderRadius: 5,
    borderWidth: 2
  },
  items: {
    width: "90%",
    padding: 5,
    margin: 5,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'skyblue'
  },
  title: {
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 5,
    backgroundColor: "#61dafb",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  }
});