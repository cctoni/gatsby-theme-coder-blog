const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { MDXTag } = require('@mdx-js/tag')
const cheerio = require('cheerio')

const scope = { React, ReactDOMServer, MDXTag, cheerio }

const regex = /^return MDXContent;\nMDXContent\.isMDXComponent = true;$/m
const fnReturn = `
return cheerio.load(
  ReactDOMServer.renderToStaticMarkup(
    React.createElement(MDXContent)
  ).replace(/\\s+/gm, ' ')
)('*').html().trim()
`

const toHtml = code => {
  const newCode = code.replace(regex, fnReturn)
  const fn = new Function(...Object.keys(scope), newCode)
  const html = fn(...Object.values(scope))
  return html
}

module.exports = toHtml
