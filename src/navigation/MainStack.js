import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTranslation } from 'react-i18next'

import WelcomeScreen from '../screens/auth/WelcomeScreen'

// import TabsStack from './TabsStack'

import { StackStyle } from './themes'

const Stack = createNativeStackNavigator();

function MainStack({ initialRouteName }) {
  const { t } = useTranslation('headers')
  return (
    <Stack.Navigator
      screenOptions={StackStyle}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/*
        <Stack.Screen
          name="Home"
          component={TabsStack}
          options={{ headerShown: false }}
        />
        */}
    </Stack.Navigator>
  );
}

export default MainStack;
