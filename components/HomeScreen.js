import { Button, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const Home = ({ navigation }) => {
    return (
        <View>
        <Button
            onPress={() =>
            navigation.navigate("Details", { name: "Custom profile header" })
            }
            title="Go to Details"
        />
        </View>
    );
};

const HomeScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreenRouter"
        component={Home}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate("Edit")}
              title="Edit"
            />
          ),
          headerTitle: () => (
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Home</Text>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;