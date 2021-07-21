// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MyButton from './src/components/MyButton';
import Counter from './src/components/Counter'
import EventButton from './src/components/EventButton'
import EventInput from './src/components/EventInput'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Button Text12</Text> */}
      {/* <MyButton title={12} test="t22tt"> </MyButton> */}
      {/* <Button title="chan button test" onPress={() => alert("Click!!!")}></Button> */}
      {/* <Counter /> */}
      {/* <EventButton/> */}
      <EventInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
});
