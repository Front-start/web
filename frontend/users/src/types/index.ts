export interface SortOrder {
  firstName: 'asc' | 'desc'
}

export interface Profile {
  firstName: string
  lastName: string
}

export interface UserRow {
  id: number
  email: string
  profile: Profile
  registeredAt: number
  lastLogonAt: number
}
