import { getTokenFromCookie } from '../../utils/auth'
const initialState = {
  token: getTokenFromCookie() || '132',
}

export default {
  state: {
    ...initialState,
  },
}
