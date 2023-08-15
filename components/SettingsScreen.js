import { Button, Text, View, Modal } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { resetDatabase, clearDatabase } from '../functions/create-database';

const db = SQLite.openDatabase('db.db');

const SettingsScreen = ({ navigation }) => {
    const [areYouSureModal1Visible, areYouSureModal1SetVisible] = useState(false);
    const [areYouSureModal2Visible, areYouSureModal2SetVisible] = useState(false);

    return (
    <View>
        <Button
            onPress={() =>
                clearDatabase()
            }
            title="Clear Database"
        />
        <Button
            onPress={() =>
                resetDatabase()
            }
            title="Reset Database"
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={areYouSureModal1Visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        />
        <Modal
            animationType="slide"
            transparent={true}
            visible={areYouSureModal2Visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        />
    </View>);
};

export default SettingsScreen;