import { View,Text, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({roundsNumber, userNumber,onStartNewGame}) => {
    return (
        <View style={styles.appContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
           <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text> roundeds to guess the number 
                <Text style={styles.highlight}> {userNumber} </Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,  
        justifyContent: 'center',
     alignItems:'center'
    },
    imageContainer: {
        width: deviceWidth < 480 ? 150:300,
        height: deviceWidth < 480 ? 150 : 300,
        borderRadius: deviceWidth < 480 ? 75 :150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin:36,
    },
    image: {
        width: '100%',
        height:'100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom :24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color:Colors.primary500,
    }
});