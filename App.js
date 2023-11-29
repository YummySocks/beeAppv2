import React, {useState} from 'react';
import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';



const handleButtonClick = () => {
  console.log('you pressed a button');
};




const App = () => {

  return (
    <SafeAreaView><View><Text>Hello</Text><Button title='test' onPress={handleButtonClick}/></View></SafeAreaView>
    
  );
};

export default App;