import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'
import { childrenToString } from '../../../utils/childrenToString'

const getLanguage = (className = '') => (/language-(\w+)/.exec(className) || [])[1] || null

type ComponentProps = React.HTMLAttributes<HTMLElement>
type PrismCodeProps = ComponentProps & { component?: React.ComponentType<ComponentProps> | string }

const PrismCode = ({ children, component: Component = 'code', ...props }: PrismCodeProps) => {
  const [__html, setHtml] = useState('')

  useEffect(() => {
    const code = childrenToString(children)
    console.log('prism run')
    const language = getLanguage(props.className) || 'js'
    const grammar = Prism.languages[language] || Prism.languages.js
    const html = Prism.highlight(code, language ? grammar : {})
    setHtml(html)
  }, [children, props.className])

  return <Component {...props} dangerouslySetInnerHTML={{ __html }} />
}

export default PrismCode
