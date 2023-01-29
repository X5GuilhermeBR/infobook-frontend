import axios from 'axios'

const tokeGoogleBook = process.env.REACT_APP_TOKEN_GOOGLE_BOOK
const baseURL = process.env.REACT_APP_BASE_URL

export function getBooks(typeSearch, valueSearch) {
  return axios.get(
    `${baseURL}?q=${typeSearch}:${valueSearch}&key${tokeGoogleBook}`
  )
}

export function getBookById(id) {
  return axios.get(`${baseURL}/${id}`)
}
