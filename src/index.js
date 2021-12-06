const Koa = require('koa')
const axios = require('axios')
const cheerio = require('cheerio')

const app = new Koa()
const PORT = 3000
const url = 'https://www.hltv.org/'

axios('https://www.hltv.org/').then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const titles = []
    $('.todays-matches', html).each(function() {
        const title = $(this).text()
        titles.push(title)
    })
    console.log(titles)
}).catch(err => console.log(err))

app.use(async ctx => {
    ctx.body = 'Salve Quebrada'
    console.log('Salve Quebrada')
})

app.listen(PORT, () => console.log('Salve Quebrada'))