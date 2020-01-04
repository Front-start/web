import { IProfile } from '../types'
import * as actionTypes from '../constants/actionTypes'

export interface LoadAction {
  type: typeof actionTypes.load
  profile: IProfile
}

export interface ChangeAction {
  type: typeof actionTypes.change
  field: string
  value: string
}
