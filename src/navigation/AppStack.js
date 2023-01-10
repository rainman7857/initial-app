import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './AuthStack';

import { StackStyle } from './themes';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={StackStyle}>
      <Stack.Screen
        name="Auth"
        component={AuthStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
