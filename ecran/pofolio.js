import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';

const pofolio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>pofolio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontSize: 30,
        border: 'black',
        color: 'white',
      }
});
export default pofolio