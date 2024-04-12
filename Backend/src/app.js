import express from'express'
import { endpointNotFound } from './middlewares/endPointNotFound.js'

const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes

app.use(endpointNotFound)

export default app;