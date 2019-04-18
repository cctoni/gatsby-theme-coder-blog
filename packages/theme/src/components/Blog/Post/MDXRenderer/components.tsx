import Image from '../Image'

// for performance reasons this file was split from ./index
// this file is used in the blog index page, that doesn't need prismjs
// this file is side-effect free, index.js is not.

// prettier-ignore
import {
  Paragraph, Blockquote, InlineCode, Strong,
  A, H2, H3, H4, H5, Hr, Pre, Li, Ol, Ul, Table, TH, TD
} from '../styles'

// prettier-ignore
const components = {
  h1: H2, h2: H3, h3: H4, h4: H5, h5: H5, h6: H5,
  hr: Hr, p: Paragraph, a: A, pre: Pre, code: InlineCode,
  blockquote: Blockquote, ol: Ol, ul: Ul, li: Li,
  strong: Strong, inlineCode: InlineCode, img: Image,
  table: Table, th: TH, td: TD
}

export default components