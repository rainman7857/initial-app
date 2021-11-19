const prodUrl = ''
const debugUrl = ''

export default class Config {
  constructor(options = {}) {
    const { apiURL, appStorageID, timeout, url } = options
    this.apiURL = apiURL || debugUrl
    this.url = url || debugUrl
    this.appStorageID = appStorageID || 'AppStorage'
    this.timeout = timeout || 30000
  }
}
