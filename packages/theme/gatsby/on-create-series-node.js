const sleep = delay => new Promise(resolve => setTimeout(resolve, delay))

const onCreateSeriesNode = async ({ node, getNodes, actions }, { relativePath }) => {
  const name = relativePath.replace(/^(.+)\.mdx?/, '/blog/series/$1')
  if (!node.frontmatter) throw new Error(`${relativePath}: series must contain frontmatter`)
  if (!node.frontmatter.alias) throw new Error(`${relativePath}: series must contain alias`)
  actions.createNodeField({ node, name: 'slug', value: `${name}-${node.frontmatter.alias}` })

  await sleep(1000) // race-condition with posts :confused:

  const seriesId = node.id

  const { parts = [] } = node.frontmatter || {}
  if (parts.length === 0) return

  getNodes().forEach(node => {
    if (!node || !node.frontmatter || !node.frontmatter.alias) return

    const index = parts.indexOf(node.frontmatter.alias)
    if (index === -1) return

    actions.createNodeField({ node, name: 'indexInSeries', value: index })
    actions.createNodeField({ node, name: 'series___NODE', value: seriesId })
  })
}

module.exports = onCreateSeriesNode
