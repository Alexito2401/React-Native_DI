/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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

const partido = (dia,mes,año, equipoL, equipoV,hora,minuto) => {
  return (
    <View style={styles.mostrarPartido}>
          <View style={styles.mostrarlogo}>
            <View style={styles.logo1}>
              <Image
                source={{ uri: 'https://i.imgur.com/SXI9LEm.png' }}
                style={{ width: 40, height: 40 }}
              />
            </View>
              <Text style={{marginLeft: 25, color:'white',fontFamily:'BungeeInline', fontSize:18}}>VS</Text>
            <View style={styles.logo2}>
              <Image
              source={{ uri: 'https://i.imgur.com/htAyytH.png' }}
              style={{ width: 40, height: 40 }}
            /></View>

          </View>

          <View style={styles.mostrarfecha}>
  <Text style={{color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize:18}}>{dia}/{mes}/{año}</Text>
          </View>
          <View style={styles.nombreEquipos}>
  <Text style={{color: '#fff', fontSize:12, fontFamily:'BungeeInline', fontSize:13,textAlign:'center' }}>{equipoL} vs {equipoV}</Text>
          </View>

          <View style={styles.hora}>
  <Text style={{color: '#fff', letterSpacing: 6, fontFamily:'BungeeInline', fontSize:18}}>{hora}:{minuto}</Text>
          </View>
        </View>
  )
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      {cabezera()}
      

      <View style={styles.contenidor}>

        <View style={styles.seccio1}>
        </View>
        {partido(15,10,2020,'Valencia','Real Madrid',17,30)}
        {partido(17,10,2020,'Barcelona','Rallo Vallecano',20,'00')}
        {partido(19,10,2020,'Levante','Malaga',15,'00')}

        </View>

      <View style={styles.base}>
        <View style={styles.basemenu}>
          <Image
          source={{ uri: 'https://i.imgur.com/83wzUWP.png' }}
          style={{ width: 30, height: 30 }}
        />
        </View>
        

        <View style={styles.basemenumedio}>
        <Image
          source={{ uri: 'https://i.imgur.com/kXUCiNN.png' }}
          style={{ width: 31, height: 33 }}
        />
        </View>

        <View style={styles.basemenu}>
        <Image
          source={{ uri: 'https://i.imgur.com/NFZEjtB.png' }}
          style={{ width: 30, height: 30 }}
        />
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#027DB4',
    borderWidth: 1,
    width:'100%',
    borderWidth:0,
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
  mostrarPartido: {
    flex: 0.3,
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
    padding:8,
    marginLeft: 10,
    flexDirection: "row",
  },
  logo1:{
    marginLeft:0
      },
  logo2:{
marginLeft: 25,
  },
  mostrarfecha: {
    alignItems:'flex-end',
    width: 200,
    height: 50,
    marginTop: 10,
    padding: 1,
    textAlign: 'center',
    marginLeft: 10,
    fontFamily: 'FontAwesome',
  },
  nombreEquipos:{
    marginTop: 20,
    paddingTop:10,
    width: 190,
    height: 50,
    marginLeft:10,
  },
  hora:{
    marginTop: 20,
    alignItems:'flex-end',
    paddingTop:1,
    padding: 1,
    width: 150,
    height: 50,
    marginLeft:20,
  },
  base:{
    width:'100%',
    height:40,
    backgroundColor: '#027DB4',
    flexDirection: 'row',
    borderWidth:0,
  },
  basemenu:{
    width:'33%',
    height:40,
    backgroundColor: '#333333',
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    borderWidth:0,
    alignItems:'center',
    paddingTop:4
  },
  basemenumedio:{
    width:'34%',
    height:40,
    backgroundColor: '#333333',
    borderTopLeftRadius:14,
    borderTopRightRadius:14,
    borderWidth:0,
    alignItems:'center',
    paddingTop:4,
  }
});

export default App;
