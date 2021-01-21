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
  TextInput,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { colors, Input } from 'react-native-elements';
import { Button } from 'react-native-elements';

class Register extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.seccio1}>

            <View style={styles.login}>
              <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>REGISTRARSE</Text>
            </View>
            <View>
              <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Email</Text>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Input
                textContentType='emailAddress'
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey' }}
              />
            </View>

            <View>
              <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Contraseña</Text>
            </View>
            <View style={{ paddingLeft: 20 }}>
              <Input
                textContentType='password'
                placeholder='Contraseña'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
                secureTextEntry={true}
                style={{ paddingBottom: 0, height: 1 }}
              />
            </View>
            <View>

              <View>
                <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Confirmar Contraseña</Text>
              </View>
              <View style={{ paddingLeft: 20 }}>
                <Input
                  textContentType='password'
                  placeholder='Contraseña'
                  leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
                  secureTextEntry={true}
                  style={{ paddingBottom: 0, height: 1 }}
                />
              </View>
              <View>
                <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Edad</Text>
              </View>
              <View style={{ paddingLeft: 20 }}>
                <Input
                  keyboardType='numeric'
                  placeholder='Edad'
                  leftIcon={{ type: 'font-awesome', name: 'birthday-cake', color: 'grey' }}
                />
              </View>

              <Button
                title='REGISTRARSE'
                titleStyle={{ color: 'white', letterSpacing: 3, fontWeight: '100' }}
                type="outline"
                buttonStyle={{
                  borderColor: 'white',
                  marginLeft: '25%',
                  marginRight: '25%',
                }}
                containerStyle={{
                  color: 'white',
                }}
              />
            </View>
            <View>
              <View style={styles.circle}><Text style={styles.simbolo}>➔</Text></View>
            </View>
          </View>
          <View style={styles.seccio2}></View>
        </View>
      </>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 1,

  }, seccio1: {
    flex: 7,
    backgroundColor: '#027DB4',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 100 / 3,
    backgroundColor: '#8400FF',
    marginTop: 8,
    marginLeft: 354,
    borderWidth: 2,
    borderColor: 'white',

  },
  seccio2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingTop: 7,
  },
  simbolo: {
    color: 'white',
    fontSize: 33,
    alignSelf: 'center',
    marginTop: 5,
    transform: [{ rotate: '180deg' }]
  }
});

export default Register;
