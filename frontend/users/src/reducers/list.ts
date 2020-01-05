import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'
import { SortOrder, UserRow } from '../types'

interface State {
  sortOrder: SortOrder
  rows: UserRow[]
  count: number
}

const initialState: State = {
  sortOrder: { firstName: 'asc' },
  rows: [],
  count: 0,
}

export default createReducer(initialState, {
  [actions.load]: (state, { list }) => ({ ...state, ...list }),
  [actions.setSortOrder]: (state, { sortOrder }) => ({
    ...state,
    sortOrder: { ...state.sortOrder, ...sortOrder },
  }),
  [actions.clear]: () => initialState,
})
