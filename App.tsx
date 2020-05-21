import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  console.log('App exe');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2}>
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc AAbcAbcAbcAbcAbcAbc
        AAbcAbcAbcAbcAbcAbcs
      </Text>
      <TouchableWithoutFeedback
        onPress={() =>
          Alert.alert('Title', 'Message', [
            {
              text: 'yes',
              onPress: () => {
                console.log('Yes');
              },
            },
            {
              text: 'no',
              onPress: () => {
                console.log('No');
              },
            },
          ])
        }>
        <Image
          fadeDuration={300}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={() =>
          Alert.prompt('Title', 'Message', (text) => console.log(text))
        }>
        <Image
          fadeDuration={300}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableOpacity>
      <TouchableHighlight
        onPress={() => console.log('Image TouchableHighlight')}>
        <Image
          fadeDuration={300}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
