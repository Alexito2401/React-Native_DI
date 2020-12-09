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


export default class EquipoVersus extends Component {
    render() {
        return (
            <View>
                <View style={styles.equipos}>

                    <Image
                        source={{ uri: this.props.linkL }}
                        style={{ width: 100, height: 120, marginLeft: 10, marginTop: 10 }}
                    />

                    <Text style={{ fontFamily: 'BowlbyOneSC', padding: 20, paddingLeft: 30, fontSize: 100, fontWeight: 'bold' }}>VS</Text>

                    <Image
                        source={{ uri: this.props.linkR }}
                        style={{ width: 100, height: 120, marginLeft: 10, marginTop: 10 }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    equipos: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
    }
});