import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      < Button title="Go to About" onPress={() => navigation.navigate('AboutPage')} />
    </View>
  )
}

function AboutPage() {
  return (
    <View>
      <Text>About Page</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
   <NavigationContainer> 
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="AboutPage" component={AboutPage} />
     </Stack.Navigator>
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
