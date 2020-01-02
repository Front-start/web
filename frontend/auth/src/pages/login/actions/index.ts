import gql from 'graphql-tag'
import { batch } from 'react-redux'
import { auth } from '@frontend/common/src/constants/security'
import * as actions from '../constants'
import stub from './stub'
import { clear } from '../../registration/actions'
import { Credentials } from '../../../types'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const login = (credentials: Credentials) => async (dispatch, getState, client) => {
  const { email, password } = credentials || getState().auth.login

  try {
    const { data } = await client.query({
      fetchPolicy: 'network-only',
      query: gql`
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
      variables: {
        email,
        password,
      },
    })
  } catch (e) {
    batch(() => {
      dispatch({
        type: auth,
        token: stub.token,
        expiresIn: stub.expiresIn,
      })

      dispatch(clear())
    })
  }
}
