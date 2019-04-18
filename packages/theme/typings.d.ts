declare module 'react-onclickout' {
  function ClickOutHandler(props: { children: React.ReactElement; onClickOut: () => any }): React.ReactElement
  export = ClickOutHandler
}

declare module 'gatsby-mdx/mdx-renderer' {
  type Props = { children: string; components: { [any: string]: React.ElementType<any> | string } }
  function MDXRenderer(props: Props): React.ReactElement
  export = MDXRenderer
}

declare const Prism: any
declare module 'prismjs' {
  const Prism: any
  export = Prism
}

declare module 'react-prism' {
  const ReactPrism: React.ComponentClass<{}, any>
  export = ReactPrism
}

declare module '*.svg' {
  const content: string
  export default content
}
