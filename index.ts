import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import { setUpDbConnection } from './src/config/dbConnection'
import router from './src/routes'

dotenv.config()
;(async function () {
	await setUpDbConnection('find-trainer')
})()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded())
app.use(router)
app.use(express.json())

app.use('/', express.static(path.join(__dirname, 'uploads/')))
app.get('/', (req, res) => {
	res.send('I am working')
})
app.listen(process.env.PORT, () => {
	console.log(`⚡⚡⚡ server started`)
})
