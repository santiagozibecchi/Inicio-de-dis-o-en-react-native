import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

const PositionScreen = () => {

     return (
          <View style={styles.container}>
               <View style={styles.cajaVerde} />
               <View style={styles.cajaMorada} />
               <View style={styles.cajaNaranja} />
          </View>
     );
};

export default PositionScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          // width: 300,
          // height: 300,
          // Le estoy diciendo que sus hijos que se posicionen en el centro
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#28C4D9',
     },
     cajaMorada: {
          width: 100,
          height: 100,
          backgroundColor: '#5856D6',
          borderWidth: 10,
          borderColor: 'white',
          position: 'absolute',
          top: 0,
          right: 0,
          // left: 50,
     },
     cajaNaranja: {
          position: 'absolute',
          width: 100,
          height: 100,
          backgroundColor: '#F0A23B',
          borderWidth: 10,
          borderColor: 'white',
          bottom: 0,
          right: 0,
     },
     cajaVerde: {
          // width: 100,
          // height: 100,
          backgroundColor: 'green',
          borderWidth: 10,
          borderColor: 'white',
          // position: 'absolute',
          // top: 0,
          // left: 0,
          // bottom: 0,
          // right: 0,
          ...StyleSheet.absoluteFillObject,
     },
});
