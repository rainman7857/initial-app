import { Platform } from 'react-native'
import platform, { opacify } from '../helpers/platform'
import { DefaultTheme } from '@react-navigation/native'

export const StackStyle = {
  headerTitleAlign: 'center',
  headerTitle: '',
  headerTintColor: platform.brandLight,
  headerBackTitleVisible: false,
  gesturesEnabled: false,
  headerForceInset: Platform.OS === 'ios' ? true : undefined,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: platform.defaultBackgroundColor
  },
  headerTitleStyle: {
    color: platform.brandLight,
    fontSize: 16,
    // fontFamily: platform.fontSemiBold
  }
}

export const TabsStyle = {
  keyboardHidesTabBar: true,
  showLabel: false,
  headerShown: false,
  tabBarStyle: {
    paddingTop: 0,
    backgroundColor: platform.tabBarBackgroundColor,
    borderTopWidth: 0,
    borderTopColor: platform.tabBarBorderColor
  }
}

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: platform.defaultBackgroundColor
  }
}
