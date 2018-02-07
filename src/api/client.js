import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = 'https://florismeininger-mailer-api.herokuapp.com'

    this.options = { ...options }
  }

  post(path, data = {}) {
    return fetch(this.createUrl(path), {
      method: 'POST',
      headers: this.headers(),
      body: data.attach
    })
    .then(res => res.json())
    .catch(err => console.log(err))
  }

  createUrl(path) {
    return [this.host, path].join('')
  }

  headers() {
    let headers = {
      Accept: 'text/plain'
    }

    return headers
  }

}
