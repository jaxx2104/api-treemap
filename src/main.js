import getReviews from './services/getReviews'
import { init } from './api/github'

const defaultOptions = {
  baseURL: 'https://api.github.com/',
  max: 10
}

const warsman = (repository, token, options) => {
  const { baseURL, max } = Object.assign(defaultOptions, options)
  init({ baseURL, token, repository })
  return getReviews({ max })
}

export default warsman
