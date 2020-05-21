import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function App() {
  let x = 1;
  console.log('App exe');

  return (
    <View style={styles.container}>
      <Text>Abc</Text>
      <Text>Abc</Text>
      <Text>Abc</Text>
      <Text>Abc</Text>
      <Text>Abssc</Text>
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
});
