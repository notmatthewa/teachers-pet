import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');

const StudentsScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Students Screen</Text>
        </View>
    );
};



export default StudentsScreen;