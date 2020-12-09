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
  Alert,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { colors, Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Cabezera from '../Components/Cabezera';
import BaseOpciones from '../Components/BaseOpciones';
import Tabla from '../Components/Tabla';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
        <View style={styles.container}>
          <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mi Perfil' link2='https://i.imgur.com/NZQxzsJ.png' />
          <View style={styles.seccio1}>
          
            <View style={styles.login}>
              <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Mi Perfil</Text>
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
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey' }}
                secureTextEntry={true}
                style={{ paddingBottom: 0, height: 1 }}
              />
              <Text style={{ textDecorationLine: 'underline', alignSelf: 'flex-end', color: '#fff', }}>Cambiar Contraseña</Text>
            </View>
            <View>
              <Text style={{ paddingTop: 15, color: 'white', fontWeight: 'bold', paddingLeft: 30, fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }}>Edad</Text>
            </View>

            <View style={{ paddingLeft: 20, flexDirection: 'row' }}>
              <View>
                <Input
                  containerStyle={{ width: 120 }}
                  keyboardType='numeric'
                  placeholder='Edad'
                  leftIcon={{ type: 'font-awesome', name: 'birthday-cake', color: 'grey' }}
                />
              </View>
              <View style={{ alignSelf: 'flex-start', marginLeft: 140 }}>
                <Button
                  buttonStyle={{ backgroundColor: '#169BD5' }}
                  title="Cerrar Cuenta"
                />
              </View>
              
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <View style={{ paddingLeft: 30 }}>
                <Button
                  buttonStyle={{ backgroundColor: '#169BD5' }}
                  title="Mis Apuestas"
                />
              </View>
              <View style={{ alignSelf: 'flex-end', marginLeft: 120 }}>
                <Button
                  buttonStyle={{ backgroundColor: '#169BD5' }}
                  title="Ingresar Tarjeta"
                />
              </View>
            </View>
          </View>
          <BaseOpciones/>
          
        </View>
        </ScrollView>
      </>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#027DB4',
  }, seccio1: {
    width: '100%',
    flex: 1,
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  login: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingTop: 10,
  },
  simbolo: {
    color: 'white',
    fontSize: 33,
    alignSelf: 'center',
    marginBottom: 20,
  }
});

export default App;
