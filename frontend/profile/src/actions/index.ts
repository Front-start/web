// import gql from 'graphql-tag'

import * as actionTypes from '../constants/actionTypes'
import { LoadAction, ChangeAction } from './types'
import { IProfile } from '../types'

export const load = (profile: IProfile): LoadAction => ({
  type: actionTypes.load,
  profile,
})

export const change = (field: string, value: string): ChangeAction => ({
  type: actionTypes.change,
  field,
  value,
})

export const fetchProfile = () => async (dispatch, getState, client) => {
  /*const { data } = await client.query({
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
    })*/

  const { profile } = getState().me

  dispatch(load(profile))
}

export const submit = () => async (dispatch, getState, client) => {
  const { profile } = getState().profile
  /*
  const { data } = await client.mutate({
    mutation: gql`
      mutation Register($input: RegisterUserInput!) {
        register(input: $input) {
          errors {
            email
            password
          }
        }
      }
    `,
    variables: {
      input: {
        email,
        password,
      },
    },
  })
*/
  alert('Профиль изменен')
}
