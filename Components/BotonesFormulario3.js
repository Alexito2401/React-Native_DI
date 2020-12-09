import * as React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {Input} from 'react-native-elements';


const BotonesFormulario3 = () => {
    const [value, setValue] = React.useState('');
    return (
        <View>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline', fontSize: 18 }}>Over</Text>
                    <View style={[styles.circulo, { marginLeft: 40 }]}>
                        <RadioButton value="first" />
                        <Text style={styles.text}>Seleccionar</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline', fontSize: 18 }}>Under</Text>
                    <View style={[styles.circulo, { marginLeft: 25 }]}>
                        <RadioButton value="second" />
                        <Text style={styles.text}>Seleccionar</Text>
                    </View>
                </View>
            </RadioButton.Group>

            <View style={{ flexDirection: 'column' }}>
                <View style={[styles.border, { flexDirection: 'row', marginTop: 20 }]}>
                    <Text style={{ fontFamily: 'BungeeInline', fontSize: 20, letterSpacing: 1 }}>CUOTA DE ENTRADA: </Text>
                    <Input keyboardType='numeric' inputStyle={{ fontSize: 30, borderRightWidth: 1, borderBottomWidth: 1 }} containerStyle={{ width: 135 }}></Input>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.border, { flexDirection: 'row', marginTop: 20 }]}>
                        <Text style={{ fontFamily: 'BungeeInline', fontSize: 20, letterSpacing: 1 }}>CUOTA DE SALIDA: </Text>
                        <Input keyboardType='numeric' inputStyle={{ fontSize: 30, borderRightWidth: 1, borderBottomWidth: 1 }} containerStyle={{ width: 135, marginLeft: 20 }}></Input>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    circulo: {
        backgroundColor: '#AAAAAA',
        width: 160,
        padding: 5,
        borderRadius: 30,
        flexDirection: 'row',
    },
    text: {
        marginTop: 0,
        fontFamily: 'BungeeInline',
        color: '#fff'
    }
});

export default BotonesFormulario3;