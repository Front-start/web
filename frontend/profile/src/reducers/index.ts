import { createReducer } from '@utils/reducer'
import * as actions from '../constants/profile'
import { IProfile, IErrors } from '../types'

interface State {
  profile: IProfile
  errors: IErrors
}

const initialState: State = {
  profile: { firstName: '', lastName: '' },
  errors: {
    firstName: false,
    lastName: false,
  },
}

export default createReducer(initialState, {
  [actions.load]: (state, { profile }) => ({ ...state, profile }),
  [actions.change]: (state, { field, value }) => ({
    ...state,
    profile: { ...state.profile, [field]: value },
  }),
  [actions.submit]: () => initialState,
})
