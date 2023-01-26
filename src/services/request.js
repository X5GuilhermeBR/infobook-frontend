import axios from 'axios'

const tokeGoogleBook = window.envKeys.REACT_APP_TOKEN_GOOGLE_BOOK
const baseURL = window.envKeys.REACT_APP_BASE_URL

export const getBook = (typeSearch, valueSearch) => {
  return axios
    .get(`${baseURL}?q=${typeSearch}:${valueSearch}&key${tokeGoogleBook}`)
    .then(res => console.log('current', res))
    .catch(err => console.log(err))
}
