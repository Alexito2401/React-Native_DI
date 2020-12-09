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
import { Image } from 'react-native-elements';


export default class Cabezera extends Component {
    render() {
        return (
            <View>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    leftComponent={<Image
                        source={{ uri: this.props.link }}
                        style={{ width: 30, height: 30 }}
                    />
                    }
                    centerComponent={{ text: this.props.name, style: { color: '#fff', fontSize: 20, marginRight: 50 } }}
                    rightComponent={<Image
                        source={{ uri: this.props.link2 }}
                        style={{ width: 30, height: 30 }}
                    />}
                    containerStyle={{
                        backgroundColor: '#616161',
                        justifyContent: 'space-around',
                    }}
                />
                <View style={styles.seccio1}>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    seccio1: {
      height:50,
      backgroundColor: '#333333',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      fontSize: 12,
      fontWeight: '400',
      padding: 12,
      textAlign: 'right',
    },
});