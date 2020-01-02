import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { RouteLink } from '@ui/link'
import messages from '../../messages'
import { IErrors, IProfile } from '../../types'

interface Props {
  intl: InjectedIntl
  profile: IProfile
  errors: IErrors
  onChange: (field: string, value: string) => void
  onSubmit: () => void
}

const Profile = ({ intl, profile, errors, onChange, onSubmit }: Props) => {
  const { firstName, lastName } = profile

  return (
    <Column align='center'>
      <Layout basis={64} />
      <Row justify='center'>
        <Layout basis={360}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.firstName)}
          </Text>
        </Layout>
      </Row>
      <Layout basis={10} />
      <Row justify='center'>
        <Layout basis={360}>
          <Input
            borderColor='lightGray'
            error={errors.firstName}
            value={firstName}
            onChange={e => onChange('firstName', e)}
            placeholder={intl.formatMessage(messages.firstNamePlaceholder)}
          />
        </Layout>
      </Row>
      <Layout basis={32} />
      <Row justify='center'>
        <Layout basis={360}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.lastName)}
          </Text>
        </Layout>
      </Row>
      <Layout basis={10} />
      <Row justify='center'>
        <Layout basis={360}>
          <Input
            borderColor='lightGray'
            error={errors.lastName}
            value={lastName}
            onChange={e => onChange('lastName', e)}
            placeholder={intl.formatMessage(messages.lastNamePlaceholder)}
          />
        </Layout>
      </Row>
      <Layout basis={64} />
      <Row justify='center'>
        <Layout basis={172}>
          <RouteLink to='/' width='100%'>
            <Button text>{intl.formatMessage(messages.cancel)}</Button>
          </RouteLink>
        </Layout>
        <Layout basis={16} />
        <Layout basis={172}>
          <Button text disabled={!firstName || !lastName} onClick={onSubmit}>
            {intl.formatMessage(messages.save)}
          </Button>
        </Layout>
      </Row>
    </Column>
  )
}

export default injectIntl(Profile)
