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


const BotonesFormulario = () => {
    const [value, setValue] = React.useState('');
    return (
        <View>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={{ flexDirection: 'column' }}>

                    <View style={[styles.circulo, { marginLeft: 10, alignSelf: 'center', marginTop: 15 }]}>
                        <RadioButton value="1" />
                        <Text style={styles.text}>Over</Text>
                    </View>
                    <View style={[styles.circulo, { marginLeft: 10, alignSelf: 'center', marginTop: 15 }]}>
                        <RadioButton value="2" />
                        <Text style={styles.text}>Under</Text>
                    </View>
                </View>
            </RadioButton.Group>

            <View style={{margin: 20}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    circulo: {
        backgroundColor: '#AAAAAA',
        width: 100,
        padding: 5,
        borderRadius: 30,
        flexDirection: 'row'
    },
    text: {
        marginTop: 0,
        fontFamily: 'BungeeInline',
        color: '#fff'
    }
});

export default BotonesFormulario;