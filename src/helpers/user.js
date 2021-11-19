import _ from 'lodash'

export const pad = num => (num < 10 ? `0${num}` : num)

export const checkEmail = text => {
  let REG = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return REG.test(String(text).toLowerCase())
}

export const checkPassword = text => {
  const _text = String(text).toLowerCase()
  let level = 0;
  let REG_1 = /^(?=.*[0-9])/;
  let REG_2 = /^(?=.*[!@#$%^&*])/;
  let REG_3 = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (REG_1.test(_text)) {
    level+=1
  }
  if (REG_2.test(_text)) {
    level+=1
  }
  if (REG_3.test(_text)) {
    level+=1
  }
  if (_.size(_text) > 8) {
    level+=1
  }
  return level
}

export const getFullName = text => {
  const value = typeof text === 'string' ? text : '';
  const splitted = _.split(value, ' ', 2);
  return _.join(splitted, ' ')
}
