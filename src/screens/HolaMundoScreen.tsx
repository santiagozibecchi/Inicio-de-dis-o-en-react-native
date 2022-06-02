import { View, Text } from 'react-native';
import React from 'react';

const HolaMundoScreen = () => {


      return (
            <View style={{
                  flex: 1,
                  backgroundColor: 'skyblue',
                  justifyContent: 'center',
            }}>
                  <Text style={{
                        fontSize: 45,
                        textAlign: 'center',
                  }}>
                        Hola Capo
                  </Text>
            </View>
      );
};

export default HolaMundoScreen;