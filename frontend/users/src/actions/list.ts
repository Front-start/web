import gql from 'graphql-tag'
import * as actions from '../constants/list'
import stub from './stub'

export const load = list => ({
  type: actions.load,
  list,
})

export const clear = () => ({
  type: actions.clear,
})

export const setSortOrder = sortOrder => ({
  type: actions.setSortOrder,
  sortOrder,
})

export const fetchUsers = () => async (dispatch, getState, client) => {
  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Users {
          users {
            rows {
              id
              email
              profile {
                firstName
                lastName
              }
              registeredAt
              lastLogonAt
            }
            count
          }
        }
      `,
    })
  } catch (e) {
    dispatch(applySort(stub))
  }
}

export const handleSortSelect = order => dispatch => {
  dispatch(setSortOrder(order))
  dispatch(applySort(stub))
}

const applySort = list => (dispatch, getState) => {
  const { sortOrder } = getState().users.list

  list.rows =
    sortOrder.firstName === 'asc'
      ? list.rows.sort((a, b) => a.profile.firstName.localeCompare(b.profile.firstName))
      : list.rows.sort((a, b) => b.profile.firstName.localeCompare(a.profile.firstName))

  dispatch(load(list))
}
