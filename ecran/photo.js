import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const photo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>photo</Text>
    </View>
  )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          },
          text:{
            fontSize: 30,
            border: 'black',
            color: 'white',
          }
    });
export default photo