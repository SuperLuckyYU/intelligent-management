import Cookies from 'js-cookie'

const AUTH_KEY = 'token'

export function getTokenFromCookie () {
  return Cookies.get(AUTH_KEY)
}
