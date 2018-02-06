import API from '../../api/client'

const api = new API()

export default (body) => {
  return (dispatch) => {
    api.post('/mailer', {...body})
      .then((result) => {
        console.log(result.body)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
