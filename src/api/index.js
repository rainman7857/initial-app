import Config from './Config'
import Authentication from './Authentication'

export default class ClassAPI {
  constructor(config) {
    this.Authentication = new Authentication(config)
  }
}

const gateway = config => new ClassAPI(new Config(config))

export let API

export async function activateAPI(config = {}) {
  console.log('ACTIVATING API')
  try {
    API = gateway(config)
    console.log('ACTIVATING API SUCCESS', config)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(error)
  }
}
