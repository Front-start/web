// import gql from 'graphql-tag'
import * as actions from '../constants'
import { login } from '../../login/actions'
import { batch } from 'react-redux'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const setErrors = errors => ({
  type: actions.setErrors,
  errors,
})

export const register = () => async (dispatch, getState, client) => {
  try {
    const { email, password } = getState().auth.registration

    const data = { register: { errors: { email: 'asd', password: '123' } } }

    /*await client.mutate({
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
    })*/

    if (data.register.errors) {
      dispatch(setErrors(data.register.errors))
    } else {
      batch(() => {
        dispatch(login({ email, password }))
        dispatch(clear())
      })
    }
  } catch (e) {
    const { email, password } = getState().auth.registration

    batch(() => {
      dispatch(login({ email, password }))
      dispatch(clear())
    })
  }
}

export const clear = () => ({
  type: actions.clear,
})
