import express from 'express'
import dotenv from 'dotenv'
import { dbConnectionMiddleware } from './src/config/dbConnection'
import router from './src/routes'
import multer from 'multer'
import path from 'path'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use(dbConnectionMiddleware)
app.use(router)
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'uploads/')))
app.get('/', (req, res) => {
	res.send('I am working')
})
app.listen(process.env.BACK_PORT, () => {
	console.log(
		`⚡⚡⚡ server running : http://localhost:${process.env.BACK_PORT}`
	)
})
