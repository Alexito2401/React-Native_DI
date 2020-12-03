/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { colors, Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
      <ScrollView scrollEnabled={false}>
        <View style={styles.seccio1}>
          
            <View style={styles.login}>
              <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>LOGIN</Text>
            </View>
            <View>
              <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Email</Text>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Input
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey' }}
              />
            </View>

            <View>
              <Text style={{ paddingTop: 15, color: 'white', fontWeight: 'bold', paddingLeft: 30, fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }}>Contraseña</Text>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Input
                placeholder='Contraseña'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey' }}
                secureTextEntry={true}
                style={{ paddingBottom: 0, height: 1 }}
              />
            </View>
            <View>

            </View>

            <View>
              <Button
                title='LOGIN'
                titleStyle={{ color: 'white', letterSpacing: 3, fontWeight: '100' }}
                type="outline"
                buttonStyle={{
                  borderColor: 'white',
                  marginLeft: '35%',
                  marginRight: '35%',
                }}
                containerStyle={{
                  color: 'white',
                }}
              />
            </View>
            <View>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 13, letterSpacing: 2, textDecorationLine: 'underline', fontFamily: 'arial', paddingTop: 20 }}>Contraseña Olvidada</Text>
            </View>
            <View>
              <View style={styles.circle}><Text style={styles.simbolo}>+</Text></View>
            </View>
        </View>

        
        <View style={[styles.seccio2]}>
 
          <Image
            source={{ uri: 'https://i.imgur.com/1fixtul.png' }}
            style={{ width: 250, height: 120, marginTop: 10, position: 'relative' }}
          />

        </View>
        </ScrollView>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 1,
  }, seccio1: {
    flex: 3,
    width: '100%',
    backgroundColor: '#027DB4',
    borderStyle: 'solid',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 3,
    backgroundColor: '#8400FF',
    marginTop: 19,
    marginLeft: 354,
    borderWidth: 2,
    borderColor: 'white',

  },
  seccio2: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingTop: 30,
  },
  simbolo: {
    color: 'white',
    fontSize: 33,
    alignSelf: 'center',
    marginBottom: 20,
  }
});

export default App;
