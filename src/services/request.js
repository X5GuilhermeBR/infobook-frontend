import axios from 'axios'

const tokeGoogleBook = window.envKeys.REACT_APP_TOKEN_GOOGLE_BOOK
const baseURL = window.envKeys.REACT_APP_BASE_URL

export function getBook(typeSearch, valueSearch) {
  return axios.get(
    `${baseURL}?q=${typeSearch}:${valueSearch}&key${tokeGoogleBook}`
  )
}
