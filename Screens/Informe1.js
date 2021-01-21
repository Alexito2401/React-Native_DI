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
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import BaseOpciones from '../Components/BaseOpciones';
import Cabezera from '../Components/Cabezera'
import MyDatePicker from '../Components/MyDatePicker';


class Informe1 extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />

                <View style={styles.contenidor}>
                    <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mi Perfil' link2='https://i.imgur.com/NZQxzsJ.png' />
                    <View style={styles.seccio1}>

                        <View style={styles.login}>
                            <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Informe de Usuario</Text>
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
                        <View style={{ paddingLeft: 20 }}>
                            <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>Fecha de Entrada</Text>
                            <MyDatePicker />
                        </View>

                        <View style={{ marginTop: 20, paddingLeft: 20 }}>
                            <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>Fecha de Salida</Text>
                            <MyDatePicker />
                        </View>

                        <Button
                            buttonStyle={{ marginLeft: 20, backgroundColor: '#AAAAAA', borderRadius: 20, width: '50%', alignSelf: 'center', marginTop: 30 }}
                            title="Buscar"
                            titleStyle={{ fontFamily: 'BungeeInline', fontSize: 16, letterSpacing: 2, color: 'black' }}
                        />
                    </View>
                    <BaseOpciones />
                </View>

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
        borderWidth: 2
    },
    seccio1: {
        flex: 1,
        backgroundColor: '#027DB4',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        fontSize: 12,
        fontWeight: '400',
        padding: 12,
        textAlign: 'right',
    },
    login: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 30,
        paddingTop: 10,
    },
});

export default Informe1;
