import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import platform, { opacify } from '../../helpers/platform'

export default function MainButton({
  styleContainer,
  title,
  onPress,
  isDark,
  disabled
}) {
  const _bg =
    isDark ? { backgroundColor: opacify(platform.brandLight, 0.1) } : {}
  const _bgDisabled =
    disabled ? { backgroundColor: opacify(platform.brandSuccess, 0.5) } : {}
  const _color = isDark ? { color: platform.brandLight } : {}
  const _colorDisabled =
    disabled ? { color: opacify(platform.brandPrimary, 0.5) } : {}
  return (
    <View style={[styles.container, styleContainer]}>
      <TouchableOpacity
        style={[styles.btn, _bg, _bgDisabled]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.title, _color]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24
  },
  btn: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: platform.brandSuccess
  },
  title: {
    color: platform.brandPrimary,
    fontSize: 16,
    fontFamily: platform.fontSemiBold
  }
})
