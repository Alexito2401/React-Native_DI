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


const BotonesUnder = () => {
    const [value, setValue] = React.useState('');
    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center', fontFamily: 'BungeeInline', fontSize: 18 }}>Under</Text>
                <View style={styles.circulo}>
                    <RadioButton value="first" />
                    <Text style={styles.text}>1.5</Text>
                </View>
                <View style={styles.circulo}>
                    <RadioButton value="second" />
                    <Text style={styles.text}>2.5</Text>
                </View>
                <View style={styles.circulo}>
                    <RadioButton value="third" />
                    <Text style={styles.text}>3.5</Text>
                </View>
            </View>
        </RadioButton.Group>
    );
};

const styles = StyleSheet.create({
    circulo: {
        backgroundColor: '#AAAAAA',
        width: 100,
        marginLeft: 10,
        padding: 5,
        borderRadius: 30,
        flexDirection: 'row'
    },
    text: {
        marginTop: 0,
        fontFamily: 'BungeeInline',
    }
});

export default BotonesUnder;