const { replace, pipeWith } = require('ramda')
const { createCompiler } = require('@mdx-js/mdx')
const babel = require('@babel/core')
const toHtml = require('./mdx-code-to-html')
const toText = require('./html-to-text')

const flow = pipeWith((f, v) => f(v))
const compiler = createCompiler()

const babelOptions = {
  configFile: false,
  presets: ['@babel/preset-react', ['@babel/preset-env', { useBuiltIns: 'entry', modules: 'false', corejs: 2 }]],
  parserOpts: { plugins: ['jsx'] },
  plugins: ['@babel/plugin-proposal-object-rest-spread'],
}

// ported from gatsby-mdx
const toCode = flow([
  compiler.stringify,
  code => babel.transformSync(code, babelOptions).code,
  replace('export { MDXContent as default };', 'return MDXContent;'),
  replace(/\nexport /g, '\n'),
])

// [TODO]: safer matching
const createCollector = type => {
  const [start, end] = [RegExp(`^.*<${type}[^>]*>\\s*`), RegExp(`\\s*</${type}>.*$`)]
  return collect({
    isStart: ({ value = '' }) => start.test(value),
    isEnd: ({ value = '' }) => end.test(value),
    unwrap: ({ value = '' }) => value.replace(start, '').replace(end, ''),
  })
}

const collect = ({ isStart, isEnd, unwrap }) => {
  const wrapper = { children: [] }

  const visitor = (node, object = wrapper, state = {}) => {
    if (state.visited) return

    if (!state.visiting && isStart(node)) state.visiting = true
    if (!state.visited && isEnd(node)) state.visited = true

    if (!state.visiting && !state.visited && node.children) {
      const search = { ...node, children: [] }
      node.children.forEach(child => visitor(child, search, state))
      node = search
    }

    if (!state.visiting) return

    if (node.type === 'jsx') {
      const mdxString = unwrap(node)
      const { children } = compiler.runSync(compiler.parse(mdxString))
      return object.children.push(...children)
    }

    object.children.push(node)
  }

  return (...args) => (visitor(...args), wrapper.children[0])
}

const parse = mdxast => {
  const code = toCode(mdxast)
  const html = toHtml(code)
  const text = toText(html)
  return { code, html, text }
}

/** @ extractMdxComponent :: ({ component: string }) -> mdxast: node -> ({ code, props, html, text }) */
const extractMdxComponent = ({ component }) => flow([createCollector(component), parse])
module.exports = extractMdxComponent
