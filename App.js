import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, ImageBackground, Button 
} from 'react-native';

export default function App() {

  const [name, setName] = useState('Magucha');

  return (
  <View style={styles.container}>
    <ImageBackground style={styles.imgBackground}
    source={ require("./assets/desktopsetup.jpg")} 
    style={{width: '100%', height: '100%'}}> 
    <Text> hello sam </Text>
    <Button 
    title='sam profile' 
    style={styles.button}/>
    </ImageBackground>
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
  imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        color: 'orange',
},
 button: {
  // style button to go bottom
 }
});
