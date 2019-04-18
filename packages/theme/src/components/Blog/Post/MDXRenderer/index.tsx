import React from 'react'
import styled from 'styled-components'
import BaseRenderer from 'gatsby-mdx/mdx-renderer'

import Prism from 'prismjs'
import PrismCode from 'react-prism'

import 'prismjs/components/prism-css'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-jsx'

import 'prismjs/themes/prism.css'

import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-highlight/prism-line-highlight.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

import '../prism/prism-bash'
import '../prism/prism.css'

import withDoubleRender from '../../../../utils/withDoubleRender'
import postComponents from './components'

Prism.languages.yml = Prism.languages.yaml
Prism.languages.json = Prism.languages.jsx

const Identity = styled(({ children }) => children as React.ReactElement<any>)``

const components = { ...postComponents, code: PrismCode }
const componentsByType = { title: { ...components, p: Identity, inlineCode: 'pre' }, default: components }

type RendererProps = { type?: keyof typeof componentsByType; children: string }

const MDXRenderer = ({ type = 'default', children }: RendererProps) => (
  <BaseRenderer components={componentsByType[type || 'default'] || components} children={children} />
)

export default withDoubleRender(MDXRenderer)
