// import gql from 'graphql-tag'

import * as actions from '../constants/profile'

export const load = () => async (dispatch, getState, client) => {
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

  dispatch({
    type: actions.load,
    profile,
  })
}

export const change = (field: string, value: string) => ({
  type: actions.change,
  field,
  value,
})

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
