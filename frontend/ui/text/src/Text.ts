import { switchProp } from 'styled-tools'
import styled from '@emotion/styled'

export interface TextProps {
  size?: string
  lineHeight?: 'xs' | 's' | 'm' | 'l'
  weight?: 'light' | 'normal' | 'medium' | 'bold'
  fStyle?: 'normal' | 'italic'
  color?: string
  align?: 'left' | 'center' | 'right'
  transform?: 'uppercase' | 'lowercase'
  display?: string
}

const Text = styled.span<TextProps>(
  ({ theme, lineHeight, color, size, weight, fStyle }) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights[weight],
    fontSize: theme.fontSizes[size],
    lineHeight: theme.lineHeights[lineHeight],
    color: theme.colors[color],
    fStyle,
  }),
  switchProp('display', {
    inline: {
      display: 'inline',
    },
    inlineFlex: {
      display: 'inline-flex',
      alignItems: 'center',
    },
  }),
  switchProp('align', {
    left: {
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
    right: {
      textAlign: 'right',
    },
  }),
  switchProp('transform', {
    uppercase: {
      textTransform: 'uppercase',
    },
    lowercase: {
      textTransform: 'lowercase',
    },
  }),
)

Text.defaultProps = {
  lineHeight: 'm',
  color: 'black',
  size: 'n',
  weight: 'normal',
  fStyle: 'normal',
  align: 'left',
  display: 'inlineFlex',
}

export { Text }
