/**
 * Required External Modules
 */
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { itemsController } from './controllers/items.controller'

/**
 * App Variables
 */

const app = express()

/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req: any, res: any) => {
  res.json({ data: 'data 123 123 444 44 55 44 gg' })
})

/**
 * Server Activation
 */
app.use('/items', itemsController)

// app.use(errorHandler)
// app.use(notFoundHandler)

module.exports = app
// export default {
//   path: '/api',
//   handler: app,
// }
