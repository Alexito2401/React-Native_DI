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
import { Image } from 'react-native-elements';

const numeroTarjeta = () => {
    return (
        <View>
            <Input
                placeholder=''
                containerStyle={{ width: 80 }}
                maxLength={4}
                keyboardType='numeric'
            />
        </View>
    )
}

class Tarjeta extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <View style={styles.container}>
                        <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mi Perfil' link2='https://i.imgur.com/NZQxzsJ.png' />
                        <View style={styles.seccio1}>
                            <View style={{ width: '100%' }}>
                                <Image containerStyle={{ marginTop: 20 }}
                                    source={{ uri: 'https://i.imgur.com/bhTAM9O.png' }}
                                    style={{ width: 410, height: 300 }}
                                />
                            </View>
                            <View>
                                <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Numero de Tarjeta</Text>
                            </View>
                            <View style={{ paddingLeft: 20, flexDirection: 'row' }}>
                                {numeroTarjeta()}
                                {numeroTarjeta()}
                                {numeroTarjeta()}
                                {numeroTarjeta()}
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
                            <View style={{ flexDirection: 'column', width: '100%' }}>

                                <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>Fecha de Caducidad</Text>
                                <Input
                                    placeholder='xx/xx'
                                    containerStyle={{ width: 80, marginLeft: 20 }}
                                    maxLength={2}
                                    keyboardType='numeric'
                                />
                                <Text style={[styles.login, { fontSize: 15, letterSpacing: 3, fontFamily: 'arial' }]}>CSV</Text>
                                <Input
                                    placeholder='xxx'
                                    containerStyle={{ width: 60, marginLeft: 20 }}
                                    maxLength={3}
                                    keyboardType='numeric'
                                />
                            </View>
                            <Button
                                buttonStyle={{ backgroundColor: '#169BD5' }}
                                title="Ingresar Apuesta"
                                containerStyle={{width: '50%', alignSelf: 'center', paddingBottom: 20}}
                            />
                        </View>
                    </View>
                    <BaseOpciones />
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

export default Tarjeta;
