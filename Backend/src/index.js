import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './db/dbConnection.js'


async function main(){
    try {
        await sequelize.sync()
        app.listen(PORT)
        console.log('> DB connection successfully')
        console.log('> App listen on port', PORT)
    } catch (error) {
        console.error('Unable to connect to the DB', error.message)
    }
}