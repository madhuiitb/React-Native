import { View, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import  {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
    let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    
    const initialGuess = generateRandomBetween(1, 100, userNumber);

    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);  
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    const nextGuessHandler = (direction) => {
        // direction => lower, greater
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess+1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber,...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;
    
    
    return (
        <View style={styles.gameContainer}>
           <Title>Opponent's Guess</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText>
                <View style={styles.buttonsContainer}>

                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove'size={24}/>
                        </PrimaryButton>
                    </View> 
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name='add' size={24} />
                        </PrimaryButton>
                    </View>
                    
                   
            </View>
            </Card>
            <View style={styles.logContainer}>
                <FlatList data={guessRounds}
                    renderItem={(itemData) =>
                        <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding:42,
    },
    instructionText: {
        marginBottom:12,
    },
    buttonsContainer: {
        flexDirection:'row'
    },
    buttonContainer: {
        flex: 1
    },
    logContainer: {
        flex:1,
       padding:16,
        alignItems: 'center',
    },
});