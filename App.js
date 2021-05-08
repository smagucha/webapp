import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button,
 Image, TextInput, Picker, Switch, FlatList, ActivityIndicator,
} from 'react-native';

export default function App() {

  const [name, setName] = useState('Magucha');

  return (
  <View style={styles.container}>
      <Text>my first app</Text>
      <StatusBar style="auto" />
        <TouchableHighlight style={styles.button}>
      <Text>Get Started</Text>
      </TouchableHighlight>
      <Text> my name is engineer {name}  </Text>
      <Image source={ require("./assets/desktopsetup.jpg") } />
      <TouchableHighlight onPress={() => { console.log("Pressed!"); }} >
        <Text>Tap me to hide modal</Text>
      </TouchableHighlight>
      <TextInput 
      style={{ width : "50%", height : 40, borderColor : "green", borderWidth : 2 }}
      />
     <Switch />
     <Button title="Go ahead, press me, I dare ya!"
     onPress={ () =>{ console.log("i love sam"); }}
      />
      <ActivityIndicator size="large" color="#ff0000" />
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
  button: {
    marginTop: 25,
    backgroundColor: 'orange',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    width: '100%'
}
});
