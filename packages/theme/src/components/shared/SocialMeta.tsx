import React from 'react'
import Helmet from 'react-helmet'
import { Overwrite } from 'utility-types'

const defaults = {
  title: 'Prisma | Open-Source GraphQL ORM for GraphQL Servers',
  description:
    'Prisma is a performant open-source GraphQL ORM-like layer doing the heavy lifting in your GraphQL server.',
  image: 'https://www.prisma.io/blog/static/og-image.png',
  video: 'https://www.youtube.com/watch?v=jF9VULLzwVk',
  url: 'https://www.prisma.io',
  type: 'website',
}

type NullableVideo = { video: null | string }
type SocialMetaProps = Partial<Overwrite<typeof defaults, NullableVideo>>

const SocialMeta = (props: SocialMetaProps) => {
  const { title, description, image, video, url, type } = { ...defaults, ...props }

  return (
    <Helmet>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {title && <meta itemProp="name" content={title} />}
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:site" content="@prisma" />
      <meta name="twitter:creator" content="@prisma" />
      {image && <meta name="twitter:image:src" content={image} />}
      {video && <meta name="twitter:player" content={video} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Prisma" />
      {video && <meta property="og:video" content={video} />}
      <meta property="og:type" content={type} />
    </Helmet>
  )
}

export default SocialMeta
