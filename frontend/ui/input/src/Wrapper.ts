import React, { createElement } from 'react'
import styled from '@emotion/styled'
import { Text } from '@ui/text'
import { Layout } from '@ui/layout'

const WrapperStyled = styled('div')<{}>({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const Wrapper = ({ error, children }) => {
  if (error) {
    children = React.Children.toArray(children)

    children.push(createElement(Layout, { key: 'margin', basis: 8 }))

    children.push(
      createElement(Text, { key: 'error', fStyle: 'italic', color: 'red', size: 's' }, error),
    )
  }

  return createElement(WrapperStyled, {}, children)
}

export default Wrapper
