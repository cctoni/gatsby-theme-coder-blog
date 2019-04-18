import React from 'react'
import styled from 'styled-components'
import BaseRenderer from 'gatsby-mdx/mdx-renderer'
import withDoubleRender from '../../utils/withDoubleRender'
import postComponents from './Post/MDXRenderer/components'

const Identity = styled(({ children }) => children as React.ReactElement<any>)``
const Paragraph = styled.span``

const components = { ...postComponents, a: Identity, p: Paragraph }
const componentsByType = { title: { ...components, p: Identity }, default: components }

type RendererProps = {
  children: string
  type?: keyof typeof componentsByType
  className?: string
}

const Renderer = ({ className, type, children }: RendererProps) => (
  <div className={className}>
    <BaseRenderer components={componentsByType[type || 'default'] || components} children={children} />
  </div>
)

// [HACK]: only show first paragraph
const MDXRenderer = styled(Renderer)`
  ${components.p} + ${components.p} { display: none !important; }
`

export default withDoubleRender(MDXRenderer)
