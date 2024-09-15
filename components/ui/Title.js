import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}
export default Title;



const styles = StyleSheet.create({
    title: {
        marginTop: 4,
        fontFamily:'open-sans-bold',
        fontSize: 24,
        color: Colors.green400,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.green400,
        padding: 12,
        borderRadius: 8,
    }
});