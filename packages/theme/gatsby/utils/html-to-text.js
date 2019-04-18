const cheerio = require('cheerio')

const toText = html => {
  const $ = cheerio.load(html)
  $('p').after('\n\n')
  return $.text().trim()
}

module.exports = toText
