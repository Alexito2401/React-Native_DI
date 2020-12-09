import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import { Button } from 'react-native-elements';


export default class ElegirInformes extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30 }}>
                        <Text style={styles.texto}>INFORME USUARIO</Text>
                        <Button
                            buttonStyle={{ marginLeft: 20, backgroundColor: '#AAAAAA', borderRadius: 20 }}
                            title="Informe 1"
                            titleStyle={{ fontFamily: 'BungeeInline', fontSize: 16, letterSpacing: 2, color: 'black' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30 }}>
                        <Text style={styles.texto}>INFORME MERCADO</Text>
                        <Button
                            buttonStyle={{ marginLeft: 20, backgroundColor: '#AAAAAA', borderRadius: 20 }}
                            title="Informe 2"
                            titleStyle={{ fontFamily: 'BungeeInline', fontSize: 16, letterSpacing: 2, color: 'black' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 30 }}>
                        <Text style={styles.texto}>INFORME APUESTA</Text>
                        <Button
                            buttonStyle={{ marginLeft: 20, backgroundColor: '#AAAAAA', borderRadius: 20 }}
                            title="Informe 3"
                            titleStyle={{ fontFamily: 'BungeeInline', fontSize: 16, letterSpacing: 2, color: 'black' }}
                        />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    seccio1: {
        height: 50,
        backgroundColor: '#333333',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        fontSize: 12,
        fontWeight: '400',
        padding: 12,
        textAlign: 'right',
    },
    texto: {
        fontFamily: 'BungeeInline',
        fontSize: 18,
        color: '#fff'
    }
});