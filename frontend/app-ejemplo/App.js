import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation';
import List from "./src/componentes/list/List";

//import { PaperProvider } from 'react-native-paper';


export default function App() {
    return (
        <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
