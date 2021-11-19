import RequestFactory from './RequestFactory'

class Authentication {
  constructor(config) {
    this.request = new RequestFactory(config)
    this.endpoint = 'auth'
  }

  Login({ email, password }) {
    const uri = `${this.endpoint}/login`
    const body = {
      email,
      password
    }
    return this.request.sendNoAuth(uri, 'POST', body)
  }
}

export default Authentication
