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
;
import Cabezera from '../Components/Cabezera';
import BaseOpciones from '../Components/BaseOpciones';
import ElegirInformes from '../Components/Elegirinformes';

class App extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Cabezera link='https://i.imgur.com/NFZEjtB.png' name='Mi Perfil' link2='https://i.imgur.com/NZQxzsJ.png' />
                    <View style={styles.seccio1}>

                        <View style={styles.login}>
                            <Text style={[styles.login, { fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Elige Informe</Text>
                        </View>
                        <ElegirInformes />
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

export default App;
