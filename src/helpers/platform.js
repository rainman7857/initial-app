import { Platform, Dimensions } from 'react-native'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
const platform = Platform.OS
const platformStyle = undefined
const isIphoneX =
  platform === 'ios' &&
  ((deviceHeight === 812 || deviceWidth === 812)
    || (deviceHeight === 844 || deviceWidth === 844)
    || (deviceHeight === 896 || deviceWidth === 896)
    || (deviceHeight === 926 || deviceWidth === 926))

export default {
  platformStyle,
  platform,

  // Color
  brandPrimary: '#2E2C38',
  brandInfo: '',
  brandSuccess: '#18E1C9',
  brandSecondary: '',
  brandDanger: '',
  brandWarning: '',
  brandDark: '#707070',
  brandDarkPrimary: '#1E1D24',
  brandDarkSecondary: '#39383F',
  brandDarkEmpty_1: '#434245',
  brandDarkEmpty_2: '#49484A',
  brandLight: '#FFFFFF',
  brandLightDark: '#FBFBFB',
  brandGrey: '#BCBCBE',
  brandGreyLight: '#E8E8E8',
  brandGreySecondary: '#C4C4C4',
  brandBlack: '#000000',
  brandRed: '#FD3C21',
  brandRedLight: '#FF7C70',
  brandGreen: '#006C6D',
  brandGreenDark: '#1B7F77',
  brandYellow: '#FFD379',
  defaultBackgroundColor: '#2E2C38',
  tabBarBorderColor: '#E5E8ED',
  tabBarActiveColor: '#24B445',
  tabBarInactiveColor: '#C2C2C2',
  tabBarBackgroundColor: '#2E2C38',

  // Font
  fontRegular: 'Metropolis-Regular',
  fontMedium: 'Metropolis-Medium',
  fontSemiBold: 'Metropolis-SemiBold',
  fontBold: 'Metropolis-Bold',

  deviceWidth,
  deviceHeight,
  isIphoneX,
  topSpace: isIphoneX ? 44 : 30,
  bottomSpace: isIphoneX ? 34 : 0,

  shadow: platform === 'ios' ? {
    shadowColor: opacify('#000000', 0.3),
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 1
  } : {
    elevation: 1
  }
}

export function opacify(color = '#ffffff', opacity = 1) {
  const o = Math.round(opacity * 256)
  const hexOpacity = o.toString(16)
  return color.concat(hexOpacity)
}
