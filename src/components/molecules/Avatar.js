import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import platform, { opacify } from '../../helpers/platform'

function Avatar({
  size = 40,
  borderColor = platform.brandGreySecondary,
  source,
  onPress,
  styleContainer,
  sourceIcon,
  onPressIcon
}) {
  const _size = { width: size, height: size, borderRadius: size / 2 }
  const _styleBtn = { borderColor }
  const _disabled = typeof onPress !== 'function'
  const _disabledBtnIcon = typeof onPressIcon !== 'function'
  const _iconColSize = size / 3
  const _iconSize = size / 5
  const _styleIconCol = {
    width: _iconColSize,
    height: _iconColSize,
    borderRadius: _iconColSize / 2
  }
  const _styleIcon = { width: _iconSize, height: _iconSize }
  return(
    <View style={[styles.container, styleContainer]}>
      <TouchableOpacity
        disabled={_disabled}
        style={[styles.btn, _size, _styleBtn]}
        onPress={onPress}
      >
        <Image style={_size} source={source} />
      </TouchableOpacity>
      {!!sourceIcon && (
        <TouchableOpacity
          disabled={_disabledBtnIcon}
          style={[styles.icon_col, _styleIconCol]}
          onPress={onPressIcon}
        >
          <Image style={_styleIcon} source={sourceIcon} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  btn: {
    backgroundColor: platform.brandGreySecondary,
    borderWidth: 1
  },
  icon_col: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
    backgroundColor: platform.brandSuccess,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Avatar
