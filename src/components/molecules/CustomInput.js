import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import platform from '../../helpers/platform'

function CustomInput({
  textInput,
  _value,
  _onChangeText,
  disabled,
  placeholderTextColor,
  styleContainer,
  subtitle,
  ...rest
}) {
  const [text, setText] = useState(_value)
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value, text])
  return(
    <View style={[styles.container, styleContainer]}>
      {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <TextInput
        value={text}
        editable={!disabled}
        style={[styles.textInput, textInput]}
        autoCorrect={false}
        placeholderTextColor={placeholderTextColor || platform.brandLight}
        selectionColor={platform.brandLight}
        underlineColorAndroid='transparent'
        onChangeText={newText => {
          setText(newText)
          if (typeof _onChangeText === 'function') {
            _onChangeText(newText)
          }
        }}
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: platform.inputBackground
  },
  subtitle: {
    color: platform.brandLight,
    fontSize: 16,
    fontFamily: platform.fontRegular,
    paddingBottom: 12,
    paddingLeft: 7
  },
  textInput: {
    flex: 1,
    minHeight: 44,
    color: platform.brandLight,
    fontSize: 16,
    fontFamily: platform.fontRegular,
    paddingTop: platform.platform === 'ios' ? 0 : 11,
    paddingHorizontal: 11,
    borderWidth: 1,
    borderColor: platform.brandGreyLight,
    borderRadius: 10,
    textAlignVertical: 'top'
  }
})

export default CustomInput
