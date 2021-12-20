const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.all('/', (req: any, res: any) => {
  res.json({ data: 'data 123 123 444 44 55' })
})

// module.exports = app

export default {
  path: '/api',
  handler: app,
}
