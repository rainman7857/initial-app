import axios from 'axios'
import { getASValue, setASValue } from '../helpers/storageHelpers'

class RequestFactory {
  constructor(config) {
    this.config = config
    this.baseURL = config.apiURL
  }

  sendNoAuth = async (uri, method, body, params) => {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }

      const config = {
        baseURL: this.baseURL,
        url: uri,
        method,
        data: body,
        params,
        headers,
        timeout: this.config.timeout
      }

      const response = await axios(config)
      if (response.status === 200) return response.data
      return Promise.reject(response)
    } catch (error) {
      return Promise.reject(error?.response?.data)
    }
  }

  send = async (uri, method, body, params, headers = {}) => {
    try {
      const user = await getASValue('user')

      let _headers = {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${user?.auth_token}`
      }

      const config = {
        baseURL: this.baseURL,
        url: uri,
        method,
        data: body,
        params,
        headers: _headers,
        timeout: this.config.timeout
      }

      const response = await axios(config)
      if (response.status === 200) return response.data
      return Promise.reject(response)
    } catch (error) {
      console.log('err', error?.response || error)
      return Promise.reject(error?.response || error)
    }
  }

}

export default RequestFactory
