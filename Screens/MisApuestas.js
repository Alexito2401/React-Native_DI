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
import { Image } from 'react-native-elements';
import Cabezera from '../Components/Cabezera';
import BaseOpciones from '../Components/BaseOpciones'

const partido = (uriImagenL, uriImagenV, dia, mes, año, equipoL, equipoV, hora, minuto) => {
  return (
    <View style={styles.mostrarPartido}>
      <View style={styles.mostrarlogo}>
        <View style={styles.logo1}>
          <Image
            source={{ uri: uriImagenL }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Text style={{ marginLeft: 25, color: 'white', fontFamily: 'BungeeInline', fontSize: 18 }}>VS</Text>
        <View style={styles.logo2}>
          <Image
            source={{ uri: uriImagenV }}
            style={{ width: 40, height: 40 }}
          /></View>

      </View>

      <View style={styles.mostrarfecha}>
        <Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 18 }}>{dia}/{mes}/{año}</Text>
      </View>
      <View style={styles.nombreEquipos}>
        <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'BungeeInline', fontSize: 13, textAlign: 'center' }}>{equipoL} vs {equipoV}</Text>
      </View>

      <View style={styles.hora}>
        <Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 18 }}>{hora}:{minuto}</Text>
      </View>
    </View>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mis Apuestas' link2='https://i.imgur.com/mTumZL7.png' />
          <View style={styles.seccio1}>

            <View style={styles.login}>
              <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Mis Apuestas</Text>
            </View>

            {partido('https://i.imgur.com/SXI9LEm.png', 'https://i.imgur.com/ylZ1xgT.png?2', 15, 10, 2020, 'Valencia', 'Real Madrid', 17, 30)}
            {partido('https://i.imgur.com/JwTyXcw.png', 'https://i.imgur.com/tQKN823.png', 17, 10, 2020, 'Barcelona', 'Rallo Vallecano', 20, '00')}

          </View>
          <BaseOpciones />
        </View>
      </>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#027DB4',
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
  },
  mostrarPartido: {
    flex: 0.4,
    backgroundColor: '#02A7F0',
    marginTop: 30,
    padding: 1,
    textAlign: 'center',
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  mostrarlogo: {
    width: 150,
    height: 50,
    marginTop: 10,
    textAlign: 'center',
    padding: 8,
    marginLeft: 10,
    flexDirection: "row",
  },
  logo1: {
    marginLeft: 0
  },
  logo2: {
    marginLeft: 25,
  },
  mostrarfecha: {
    alignItems: 'flex-end',
    width: 200,
    height: 50,
    marginTop: 10,
    padding: 1,
    textAlign: 'center',
    marginLeft: 10,
    fontFamily: 'FontAwesome',
  },
  nombreEquipos: {
    marginTop: 20,
    paddingTop: 10,
    width: 190,
    height: 50,
    marginLeft: 10,
  },
  hora: {
    marginTop: 20,
    alignItems: 'flex-end',
    paddingTop: 1,
    padding: 1,
    width: 150,
    height: 50,
    marginLeft: 20,
  },
});

export default App;
