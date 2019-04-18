import React from 'react'
import styled from 'styled-components'
import { Overwrite } from 'utility-types'

import Button from './Button'
import Mail from '../../vectors/Mail'

type SizeProp = 'small' | 'medium'
type BgType = string | ((p: any) => string)
type EmailFieldProps = Overwrite<
  React.ComponentPropsWithoutRef<'input'>,
  { size?: SizeProp; onSubmit: (e: React.SyntheticEvent) => void }
> & {
  icon?: React.ReactNode
  submitButton?: boolean
  submitText?: React.ReactNode
  bg?: BgType
}

const EmailField = ({
  icon = <Mail />,
  submitButton = true,
  submitText = 'Join',
  size = 'small',
  bg,
  style,
  className,
  onSubmit,
  ...props
}: EmailFieldProps) => (
  <Wrapper style={style} className={className} size={size} bg={bg}>
    {icon && <Icon size={size}>{icon}</Icon>}
    <Input placeholder="your@email.com" required data-size={size} {...props} />
    {submitButton && (
      <Button color="dark" size={size} onClick={onSubmit}>
        {submitText}
      </Button>
    )}
  </Wrapper>
)

export default EmailField

// Styles
const Wrapper = styled.div<{ size: SizeProp; bg?: BgType }>`
  --inner-height: ${p => (p.size === 'small' ? 32 : 40)}px;

  padding: ${p => (p.size === 'small' ? 8 : 12)}px;
  background: ${p => p.bg || 'white'};
  border-radius: ${p => p.theme.radius}px;
  width: 100%;
  display: inline-flex;
  align-items: center;
`

const Icon = styled.div<{ size: SizeProp }>`
  width: var(--inner-height);
  height: var(--inner-height);
  margin-right: ${p => (p.size === 'small' ? 4 : 8)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  flex-shrink: 0;

  svg {
    display: inline-block;
    height: ${p => (p.size === 'small' ? 20 : 24)}px;
    width: auto;

    path {
      fill: ${p => p.theme.primaryLight2};
    }
  }
`

// html DOM input has a prop name 'size', renamed here
const Input = styled.input<{ ['data-size']: SizeProp }>`
  background: none;
  border: none;
  outline: none;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  height: var(--inner-height);
  color: ${p => p.theme.primary};
  font-size: ${p => (p['data-size'] === 'small' ? 16 : 20)}px;
  vertical-align: middle;

  ::placeholder {
    color: ${p => p.theme.primaryLight2};
    transition: color 80ms ease-in-out;
  }

  &:focus {
    ::placeholder {
      color: ${p => p.theme.primaryLight1};
    }
  }
`
