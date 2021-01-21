import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import { Image } from 'react-native-elements';

export class ElementLlista extends Component {
  constructor(props){
    super(props)
    
  }
  render(){
      return(
        <View style={styles.mostrarPartido}>
      <View style={styles.mostrarlogo}>
        <View style={styles.logo1}>
          <Image
            source={{ uri: this.props.elementAMostrar.item.linkL }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Text style={{ marginLeft: 25, color: 'white', fontFamily: 'BungeeInline', fontSize: 18 }}>VS</Text>
        <View style={styles.logo2}>
          <Image
            source={{ uri: this.props.elementAMostrar.item.linkV }}
            style={{ width: 40, height: 40 }}
          /></View>

      </View>

      <View style={styles.mostrarfecha}>
        <Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 18 }}>{this.props.elementAMostrar.item.dia}/{this.props.elementAMostrar.item.mes}/{this.props.elementAMostrar.item.año}</Text>
      </View>
      <View style={styles.nombreEquipos}>
        <Text style={{ color: '#fff', fontSize: 12, fontFamily: 'BungeeInline', fontSize: 13, textAlign: 'center' }}>{this.props.elementAMostrar.item.equipoL} vs {this.props.elementAMostrar.item.equipoV}</Text>
      </View>

      <View style={styles.hora}>
        <Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 18 }}>{this.props.elementAMostrar.item.hora}:{this.props.elementAMostrar.item.minuto}</Text>
      </View>
    </View>
   )
  }s
}

const styles = StyleSheet.create({
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
    }
  });