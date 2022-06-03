import { View, StyleSheet } from 'react-native';
import React from 'react';

const TareaScreen = () => {


     return (
          <View style={styles.container}>
               <View style={styles.cajaMorada} />
               <View style={styles.cajaNaranja} />
               <View style={styles.cajaAzul} />
          </View>
     );
};

export default TareaScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'row',
          backgroundColor: '#28425B',
          justifyContent: 'center',
          alignItems: 'center',
     },
     cajaMorada: {
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#5856D6',
     },
     cajaNaranja: {
          // position: 'absolute',
          top: 50,
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#F0A23B',
     },
     cajaAzul: {
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: 'white',
          backgroundColor: '#28C4D9',
     },
});
