import mongoose from 'mongoose'
import process from 'process'

export const setUpDbConnection = (dbName: string) => {
	return new Promise<void>((resolve, reject) => {
		mongoose
			.connect(`${process.env.DB_URL}${dbName}`)
			.then(() => {
				console.log('Database connection established successfully.')
				resolve()
			})
			.catch((error) => {
				console.error('Connection error:-', error)
				reject(error)
			})
	})
}
