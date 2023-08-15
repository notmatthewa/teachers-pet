import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initDatabase } from './functions/create-database';
import Ionicons from '@expo/vector-icons/Ionicons';


import HomeScreen from './components/HomeScreen';
import StudentsScreen from './components/StudentsScreen';
import ClassesScreen from './components/ClassesScreen';
import ActionsScreen from './components/ActionsScreen';
import SettingsScreen from './components/SettingsScreen';

const Tab = createBottomTabNavigator();

initDatabase();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: route.label,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Students':
                iconName = focused ? 'people' : 'people-outline';
                break;
              case 'Classes':
                iconName = focused ? 'school' : 'school-outline';
                break;
              case 'Actions':
                iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                iconName = 'alert-circle-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} label="Home" 
          options={
            { headerShown: false }
          }
        />
        <Tab.Screen name="Students" component={StudentsScreen} label="Students" />
        <Tab.Screen name="Classes" component={ClassesScreen} label="Classes" />
        <Tab.Screen name="Actions" component={ActionsScreen} label="Actions" />
        <Tab.Screen name="Settings" component={SettingsScreen} label="Settings" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
