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

import { Button } from 'react-native-elements';
import BaseOpciones from '../Components/BaseOpciones';
import Cabezera from '../Components/Cabezera'
import BotonesFormulario3 from '../Components/BotonesFormulario3';


class Informe3 extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <ScrollView>
                    <View style={styles.contenidor}>
                        <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mi Perfil' link2='https://i.imgur.com/NZQxzsJ.png' />
                        <View style={styles.seccio1}>

                            <View style={styles.login}>
                                <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Informe de Apuesta</Text>
                            </View>
                            <BotonesFormulario3 />

                            <Button
                                buttonStyle={{ marginLeft: 20, backgroundColor: '#AAAAAA', borderRadius: 20, width: '50%', alignSelf: 'center', marginTop: 30 }}
                                title="Buscar"
                                titleStyle={{ fontFamily: 'BungeeInline', fontSize: 16, letterSpacing: 2, color: '#fff' }}
                            />
                        </View>
                        <BaseOpciones />
                    </View>
                </ScrollView>
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

export default Informe3;
