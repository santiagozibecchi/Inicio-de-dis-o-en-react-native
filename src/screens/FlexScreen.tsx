import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FlexScreen = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.caja1}>Caja 1</Text>
               <Text style={styles.caja2}>Caja 2</Text>
               <Text style={styles.caja3}>Caja 3</Text>
          </View>
     );
};

export default FlexScreen;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: '#28C4D9',
          alignItems: 'flex-start',
     },
     caja1: {
          borderWidth: 2,
          borderColor: 'white',
          fontSize: 20,
     },
     caja2: {
          borderWidth: 2,
          borderColor: 'white',
          fontSize: 20,
     },
     caja3: {
          borderWidth: 2,
          borderColor: 'white',
          fontSize: 20,
     },
});
