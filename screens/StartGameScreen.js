import {
    StyleSheet, TextInput, View, Text, Alert, Dimensions, useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
const StartGameScreen = ({ onPickedNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

    const numberInputHandler = (inputText) => {
        setEnteredNumber(inputText);
    }
    const resetHandler = () => {
        setEnteredNumber('');
    }

    const confirmHandler = () => {
        const choosenNumber = parseInt(enteredNumber);
        if (isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber >99) {
            //show alret...
            Alert.alert('Invalid number!','Number has to be a number 1 and 99',[{text:'Okay',style:'destructive',onPress:resetHandler}])
            return;
        }
        onPickedNumber(choosenNumber);
    }

    const marginTopDistance = height < 400 ? 20 : 100;

    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.appContainer, { marginTop: marginTopDistance }]}>
            <Title >Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.textInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmHandler}
                        >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;
// const deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    screen: {
        flex:1,
    },
    appContainer: {
        flex: 1,
        // marginTop: deviceHeight<400?20:100,   
        alignItems:'center'
    },
    textInput: {
        width:50,
        height: 50,
        fontSize:32,
        borderBottomColor: Colors.accent300,
        borderBottomWidth: 2,
        color: Colors.accent300,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign:'center',
    },
    buttonsContainer: {
        flexDirection:'row'
    },
    buttonContainer: {
        flex:1
    }
})