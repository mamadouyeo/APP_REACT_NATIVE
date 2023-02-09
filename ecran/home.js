import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>home</Text>
    </View>
  )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontSize: 30,
        border: 'black',
        color: 'white',
      }
});
export default home