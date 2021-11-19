import React, { useLayoutEffect, useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import platform, { opacify } from '../../helpers/platform'
import _ from 'lodash'

import MainButton from '../../components/molecules/MainButton'
import Spacer from '../../components/atoms/Spacer'
import ShowError from '../../helpers/ShowError'

function WelcomeScreen({ navigation }) {
  const { t } = useTranslation('welcome-screen')
  useEffect(() => {
    ShowError('asdasdadsasd')
  }, [])
  return (
    <View style={styles.container}>

      <MainButton title={'test'} onPress={() => {}} />
      <View style={styles.footer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footer: {
    height: platform.bottomSpace + 30
  }
})

export default WelcomeScreen
