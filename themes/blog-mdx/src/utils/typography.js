import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import gray from 'gray-percentage'

// import colors from './colors'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 5 / 2,
  headerFontFamily: ['Inter', 'system-ui', 'sans-serif'],
  headerWeight: 700,
  bodyFontFamily: ['Inter', 'system-ui', 'sans-serif'],
  bodyWeight: 400,
  headerColor: 'inherit',
  bodyColor: 'inherit',
  includeNormalize: false,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      // color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      // color: colo,
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: 'none',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
    pre: {
      fontFamily: '"Fira Code", monospace',
    },
    code: {
      fontFamily: '"Fira Code", monospace',
    },
  }),
})

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
