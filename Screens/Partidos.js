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
  FlatList
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native-elements';
import BaseOpciones from '../Components/BaseOpciones';
import { ElementLlista } from '../Components/ElementosLista';

const cabezera = () => {
  return (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        leftComponent={<Image
          source={{ uri: 'https://i.imgur.com/83wzUWP.png' }}
          style={{ width: 30, height: 30 }}
        />
        }
        centerComponent={{ text: 'Partidos', style: { color: '#fff', fontSize: 20, marginRight: 155 } }}
        rightComponent={<Icon
          name='search'
          type='fontawesome'
          color='white'
          size={40}
        />}
        containerStyle={{
          backgroundColor: '#616161',
          justifyContent: 'space-around',
        }}
      />
    </View>
  )
}

class Partidos extends Component {

  constructor(props){
    super(props)
    //dadesAMostrar com a variable de l'estat de la classe
    this.state={
      dadesAMostrar:[{linkL:'https://i.imgur.com/SXI9LEm.png', linkV: 'https://i.imgur.com/ylZ1xgT.png?2', dia: '15', mes: '10', año: '2020', equipoL: 'Valencia', equipoV: 'Real Madrid', hora: '17', minuto: '30'},
      {linkL:'https://i.imgur.com/JwTyXcw.png', linkV: 'https://i.imgur.com/tQKN823.png', dia: '17', mes: '10', año: '2020', equipoL: 'Barcelona', equipoV: 'Rallo Vallecano', hora: '20', minuto: '00'},
      {linkL:'https://i.imgur.com/0kjJAcO.png', linkV: 'https://i.imgur.com/qzZh9lp.png', dia: '19', mes: '10', año: '2020', equipoL: 'Levante', equipoV: 'Malaga', hora: '15', minuto: '00'},
    ]
    }
  }
  render() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      {cabezera()}


      <View style={styles.contenidor}>

        <View style={styles.seccio1}>
        </View>
        <FlatList
           data={this.state.dadesAMostrar} 
           keyExtractor={(item, index)=>index.toString()}
           style={{padding:5}}
           renderItem={(item)=>(<ElementLlista elementAMostrar={item}/>  )}
           />
      </View>

      <BaseOpciones/>

    </>
  );
};
}

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#027DB4',
    borderWidth: 1,
    width: '100%',
    borderWidth: 0,
  },
  seccio1: {
    flex: 0.05,
    backgroundColor: '#333333',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    fontSize: 12,
    fontWeight: '400',
    padding: 12,
    textAlign: 'right',
  },
  base: {
    width: '100%',
    height: 40,
    backgroundColor: '#027DB4',
    flexDirection: 'row',
    borderWidth: 0,
  }
});

export default Partidos;
