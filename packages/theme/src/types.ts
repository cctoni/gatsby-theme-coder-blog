export type AuthorMetaProps = { name: string; username: string; twitter: string; avatar: string }

export type ExtractedMdx = { code: string; text: string }

export type GatsbyMdx = { body: string }

export type FrontmatterImageProps = { heroImage: string; heroImageAlt?: string } & { metaImage: string }

export type MdxSeriesNode = {
  frontmatter: { title?: string; parts?: MdxPostNode[] }
  fields: { slug: string }
  code?: GatsbyMdx
}

export type MdxPostNode = {
  code: GatsbyMdx
  frontmatter: { video?: string; authors?: AuthorMetaProps[]; spectrum?: string } & FrontmatterImageProps
  fields: {
    date: string
    slug: string
    title: ExtractedMdx
    abstract: ExtractedMdx
    series?: MdxSeriesNode
    indexInSeries?: number
  }
}
