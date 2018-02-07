import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = 'https://florismeininger-mailer-api.herokuapp.com'

    this.options = { ...options }
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .send(data)
  }

  createUrl(path) {
    return [this.host, path].join('')
  }


}
