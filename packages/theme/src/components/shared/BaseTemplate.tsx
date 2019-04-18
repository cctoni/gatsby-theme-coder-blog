import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import unfetch from 'isomorphic-unfetch'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import Helmet from 'react-helmet'
import theme from '../../utils/styles/theme'
import '../../utils/styles'

const googleFonts = 'https://fonts.googleapis.com/css?family'
const noop = () => {}

// [TODO]: Move misc api url to env variable
// [TODO]: Enable SSR via graphql-hooks-ssr + graphql-hooks-memcache
const client = new GraphQLClient({
  url: 'https://misc.prisma.sh',
  fetch: unfetch.bind(typeof window === 'undefined' ? null : window),
})

const ThirdPartyScript = ({ code: __html }: { code: string }) => <script dangerouslySetInnerHTML={{ __html }} />

type BaseTemplateProps = { title?: string }

const BaseTemplate: React.FunctionComponent<BaseTemplateProps> = ({ children, title }) => (
  <Fragment>
    <Helmet>
      {title && <title>{title} | Prisma</title>}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="Prisma" />
      <meta name="application-name" content="Prisma" />
      <meta name="msapplication-TileColor" content="#0c344b" />
      <meta name="theme-color" content="#ffffff" />

      <link rel="apple-touch-icon" sizes="180x180" href="/blog/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/blog/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/blog/favicon-16x16.png" />
      <link rel="manifest" href="/blog/site.webmanifest" />
      <link rel="mask-icon" href="/blog/safari-pinned-tab.svg" color="#0c344b" />
      <link rel="stylesheet" href={`${googleFonts}=Montserrat:700|Open+Sans:400,600,700,400i`} />
      <link rel="stylesheet" href={`${googleFonts}=Source+Code+Pro`} />
      <ThirdPartyScript code="<!-- Hotjar Tracking Code for https://www.prisma.io -->\n(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:980061,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');" />
    </Helmet>
    {children && (
      <ClientContext.Provider value={client}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ClientContext.Provider>
    )}
  </Fragment>
)

export default BaseTemplate

export const withBaseTemplate = <P extends {}>(
  Component: React.ComponentType<P>,
  mapProps: (props: P) => BaseTemplateProps | void = noop,
) => (props: P) => (
  <BaseTemplate {...mapProps(props)}>
    <Component {...props} />
  </BaseTemplate>
)
