const express = require('express')
const cors = require('cors')
const {connect} = require('mongoose')
const dotenv = require('dotenv')
const driverRouter = require('./routes/driver')
const cabRouter = require('./routes/cab')

dotenv.config()

const app = express()
const PORT = 3000
app.use(cors())
app.use(express.json())
app.use('/driver', driverRouter)
app.use('/cab',cabRouter)

connect(process.env.DB_URL).then(() => {
    console.log('Database Connected Successfully!')
    try {
        app.listen(PORT, () => console.log(`Server started listening on ${PORT}!`))
    } catch (error) {
        console.log(error.message)
    }
}).catch(() => console.log('Database connection failed!'))

