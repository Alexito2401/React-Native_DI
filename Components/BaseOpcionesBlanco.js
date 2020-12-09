import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native-elements';


export default class BaseOpciones extends Component {
    render() {
        return (
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
        )
    }
}

const styles = StyleSheet.create({
    base: {
      width: '100%',
      height: 40,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderWidth: 0,
    },
    basemenu: {
      width: '33%',
      height: 40,
      backgroundColor: '#333333',
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      borderWidth: 0,
      alignItems: 'center',
      paddingTop: 4
    },
    basemenumedio: {
      width: '34%',
      height: 40,
      backgroundColor: '#333333',
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      borderWidth: 0,
      alignItems: 'center',
      paddingTop: 4,
    }
  });