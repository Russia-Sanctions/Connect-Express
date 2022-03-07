import fs from 'fs/promises'
import { matchIp, assets } from '@russia-sanctions/base'

const dieWithMsg = res => assets.getHtml().then(html => res
  .setHeader('content-type', 'text/html; charset=UTF-8')
  .writeHead(451)
  .end(html)
)

export default (req, res, next) => {
  return Promise.all([
    ...(req.headers['x-forwarded-for'] || '').split(','),
    req.connection.remoteAddress
  ].filter(ip => !!ip).map(ip => matchIp(ip)))
    .then(matches => !matches.some(item => item.type) ? dieWithMsg(res) : next())
}
