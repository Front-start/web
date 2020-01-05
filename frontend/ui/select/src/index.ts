import { createElement, ReactText } from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'

export interface SelectElementProps {
  color?: string
  borderColor?: string
  disabled?: boolean
  placeholder?: string
  onChange: (value: ReactText) => void
  value: string | number
}

const SelectElement = styled('select', {
  shouldForwardProp: prop => !['borderColor'].includes(prop),
})(
  ({ color, borderColor, theme }) => ({
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: `${theme.borderRadius.n}px`,
    outline: 'none',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors[borderColor]}`,
    paddingLeft: '20px',
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    transition: '100ms ease all',
    fontFamily: theme.fontFamily.sf,
    fontSize: `${theme.fontSizes.s}px`,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.s,
    color: theme.colors[color],
    [':not([value=""])']: {
      boxShadow: 'none',
      borderColor: `${theme.colors.blueHaze}`,
    },
    [':hover']: {
      boxShadow: 'none',
      borderColor: `${theme.colors.blueHaze}`,
      backgroundColor: `${theme.colors.webWhite}`,
    },
    [':focus']: {
      boxShadow: '0 2px 6px 0 rgba(41, 50, 70, 0.4)',
      borderColor: `${theme.colors.lightGray}`,
      backgroundColor: `${theme.colors.white}`,
    },
  }),
  ifProp('disabled', ({ theme }: any) => ({
    border: `1px solid ${theme.colors.blueHaze}`,
    color: `${theme.colors.blueHaze}`,
  })),
)

const Select = (props: SelectElementProps) =>
  createElement(SelectElement, {
    onChange: ({ target }) => props.onChange(target.value),
    ...props,
  })

Select.defaultProps = {
  color: 'blueBayoux',
  borderColor: 'lightGray',
  onChange: () => null,
}

interface OptionElementProps {
  color?: string
  disabled?: boolean
  value: string | number
}

const Option = styled('option')<OptionElementProps>(
  ({ theme }) => ({}),
  ifProp('disabled', ({ theme }: any) => ({
    color: `${theme.colors.blueHaze}`,
  })),
)

export { Select, Option }
