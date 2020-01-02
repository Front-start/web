import { defineMessages } from 'react-intl'

export const namespace = '@aunited/profile'

export default defineMessages({
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'фамилия',
  },
  firstNamePlaceholder: {
    id: `${namespace}.firstNamePlaceholder`,
    defaultMessage: 'Введите имя',
  },
  lastNamePlaceholder: {
    id: `${namespace}.lastNamePlaceholder`,
    defaultMessage: 'Введите фамилию',
  },
  cancel: {
    id: `${namespace}.cancel`,
    defaultMessage: 'Отмена',
  },
  save: {
    id: `${namespace}.save`,
    defaultMessage: 'Сохранить',
  },
})
