import React, { useRef, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { useDispatch } from 'react-redux'

import MainStack from './MainStack'
import { NavigationTheme } from './themes'
import { navigationRef } from './RootNavigation'
import { activateAPI } from '../api'
import { getASValue } from '../helpers/storageHelpers'
import { setUser } from '../actions/userActions'

function AppContainer() {
  const dispatch = useDispatch()
  const routeNameRef = useRef();
  const [initialRouteName, setInitialRouteName] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    hideSplash()
    initializeAPI()
    getUser()
  }, [])
  const hideSplash = () => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 500)
  }
  const initializeAPI = async () => {
    try {
      await activateAPI()
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const getUser = async () => {
    try {
      const user = await getASValue('user')
      if (user?.token) {
        dispatch(setUser(user))
        setInitialRouteName('Home')
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  if (loading) return null
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={NavigationTheme}
      onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name
        if (previousRouteName !== currentRouteName) {

        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <MainStack initialRouteName={initialRouteName} />
    </NavigationContainer>
  );
}

export default AppContainer
