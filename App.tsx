import React from "react";
import {View, Text, Imagem, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Imagem 
      source={require('./assets/img/bg-smartphone.jpg')} 
      />
      <Text>App TDS03</Text>
    </View>
  );

};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
