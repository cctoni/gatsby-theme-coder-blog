import styled, { ThemedStyledProps } from 'styled-components'
import theme from '../../utils/styles/theme'

type StyledProps = ThemedStyledProps<React.ComponentPropsWithoutRef<'div'>, typeof theme>
type BadgeProps = { bg?: (props: StyledProps) => string }

const Badge = styled.div<BadgeProps>`
  font-size: 0.875rem;
  border-radius: 0.25rem;
  line-height: 1em;
  padding: 0.3125rem 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
  width: auto;
  color: #fff;
  background: ${p => (p.bg ? p.bg(p) : p.theme.blue)};
`

Badge.defaultProps = {
  bg: p => p.theme.blue,
}

export default Badge
