/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/

import * as React from 'react';
import { Component } from 'react';
import { RadioButton } from 'react-native-paper';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
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
import EquipoVersus from '../Components/EquipoVersus';
import BotonesOver from '../Components/BotonesOver';
import BotonesUnder from '../Components/BotonesUnder';
import BaseOpcionesBlanco from '../Components/BaseOpcionesBlanco';



class Partido extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <ScrollView scrollEnabled={true}>
                    <View style={styles.container}>

                        <Cabezera link='https://i.imgur.com/83wzUWP.png' name='Valencia vs Madrid' link2='https://i.imgur.com/mTumZL7.png' />
                        <View style={styles.seccio1}>
                            <EquipoVersus linkL='https://i.imgur.com/SXI9LEm.png' linkR='https://i.imgur.com/ylZ1xgT.png?2' />
                            <View>
                                <View style={{ alignSelf: 'center' }}><Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 16 }}>10/12/2020</Text></View>

                                <View style={{ alignSelf: 'center' }}><Text style={{ color: '#fff', letterSpacing: 6, fontFamily: 'BungeeInline', fontSize: 18 }}>17:30</Text></View>
                            </View>

                        </View>

                        <View style={styles.seccio2}>
                            <View style={styles.border}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline', fontSize: 18 }}>Over</Text>
                                    <View style={styles.circulo}><Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline' }}>2.4</Text></View>

                                    <Text style={{ marginLeft: 15, alignSelf: 'center', fontFamily: 'BungeeInline', fontSize: 18 }}>Under</Text>
                                    <View style={styles.circulo}><Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline' }}>1.4</Text></View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 10 }}>
                                <BotonesOver />
                                <View style={{ padding: 10 }}></View>
                                <BotonesUnder />
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={[styles.border, { flexDirection: 'row', marginTop: 20 }]}>
                                    <Text style={{ fontFamily: 'BungeeInline', fontSize: 20, letterSpacing: 1 }}>Dinero: </Text>
                                    <Input keyboardType='numeric' inputStyle={{ fontSize: 30, borderRightWidth: 1, borderBottomWidth: 1 }} containerStyle={{ width: 135 }}></Input>
                                </View>

                                <View style={styles.border}>
                                    <View style={[styles.circulo, { width: 120, marginTop: 10, marginLeft: 0 }]}><Button
                                        buttonStyle={{ backgroundColor: '#AAAAAA', borderRadius: 20 }}
                                        title="Apostar"
                                        titleStyle={{ fontFamily: 'BungeeInline', fontSize: 18,color:'black' }}
                                    /></View>
                                </View>
                            </View>
                        </View>
                        <BaseOpcionesBlanco />
                    </View>
                </ScrollView>
            </>
        );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#027DB4',
    }, seccio1: {
        flex: 2,
        width: '100%',
        backgroundColor: '#027DB4',
        borderStyle: 'solid',
    },
    seccio2: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    border: {
        marginLeft: 20,
        marginTop: 10,
    },
    circulo: {
        backgroundColor: '#AAAAAA',
        width: 100,
        marginLeft: 15,
        padding: 5,
        borderRadius: 30,
        alignItems: 'center'
    }
});

export default Partido;
