// import gql from 'graphql-tag'
import { batch } from 'react-redux'
import { auth } from '@frontend/common/src/constants/security'
import * as actions from '../constants'
import stub from './stub'
import { Credentials } from '../../../types'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const clear = () => ({
  type: actions.clear,
})

export const setErrors = errors => ({
  type: actions.setErrors,
  errors,
})

export const setToken = (token, expiresIn) => ({
  type: auth,
  token,
  expiresIn,
})

export const login = (credentials: Credentials) => async (dispatch, getState, client) => {
  const { email, password } = credentials || getState().auth.login

  try {
    const data = { login: { errors: { email: 'asd', password: '123' } } }

    /*const { data } = await client.query({
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
    })*/

    if (data.login.errors) {
      dispatch(setErrors(data.login.errors))

      setTimeout(
        () =>
          batch(() => {
            dispatch(setToken(stub.token, stub.expiresIn))
            dispatch(clear())
          }),
        3000,
      )
    } else {
      batch(() => {
        dispatch(setToken(stub.token, stub.expiresIn))
        dispatch(clear())
      })
    }
  } catch (e) {
    batch(() => {
      dispatch(setToken(stub.token, stub.expiresIn))
      dispatch(clear())
    })
  }
}
