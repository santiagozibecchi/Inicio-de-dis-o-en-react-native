import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const BoxObjectModelScreen = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>Box Object Model</Text>
          </View>
     );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
     },
     title: {
          fontSize: 20,
          // width: 250,
          borderWidth: 5,
          // paddingHorizontal: 50,
          paddingVertical: 25,
          textAlign: 'center',
          marginHorizontal: 10,
     },
});

