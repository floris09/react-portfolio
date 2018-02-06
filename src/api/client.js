import request from 'superagent'

export default class ApiClient {

  constructor(host, options = {}) {
    this.host = process.env.NODE_ENV === 'production'
      ? 'https://expert-chinbone.codaisseur.cloud' // WITHOUT the / !!!
      : (host || 'http://localhost:3030')

    this.options = { ...options }
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  createUrl(path) {
    return [this.host, path].join('')
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    return headers
  }

}
