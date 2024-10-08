import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return <View style={styles.cardContainer}>
        {children}
        </View>
}
export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18:36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 12,
        backgroundColor: Colors.dark800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});