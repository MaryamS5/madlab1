import React from 'react';


import { NavigationContainer } from '@react-navigation/native';


import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {homesrc} from "./components/home.jsx";
import{notifi} from "./components/notfiction.jsx";
export default function  App () {
  const Stack =createNativeStackNavigation();
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="home">

<Stack.Screen name= 'home' component={homescr}/>

<Stack.Screen name= 'notification' component={notifi}/>




</Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;