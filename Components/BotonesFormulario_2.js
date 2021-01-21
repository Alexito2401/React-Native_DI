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


const BotonesFormulario_2 = () => {
    const [value, setValue] = React.useState('');
    return (
        <View>
            <RadioButton.Group onValueChange={newValue1 => setValue(newValue1)} value={value}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.circulo, { marginLeft: 25 }]}>
                        <RadioButton value="3" />
                        <Text style={styles.text}>1.5</Text>
                    </View>
                    <View style={[styles.circulo, { marginLeft: 10 }]}>
                        <RadioButton value="4" />
                        <Text style={styles.text}>2.5</Text>
                    </View>
                    <View style={[styles.circulo, { marginLeft: 10 }]}>
                        <RadioButton value="5" />
                        <Text style={styles.text}>3.5</Text>
                    </View>
                </View>
            </RadioButton.Group>
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

export default BotonesFormulario_2;