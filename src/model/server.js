import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config()

export class Server {
    constructor() {
        this.app = express()
        //Middleware 
        this.middleware()
        //Routing
        this.routing();
    }

    middleware() {
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(morgan('dev'))
        this.app.use(cors())
        //Static files
        this.app.use(express.static('public'))
        //Template Engine
        this.app.set('layout', './layouts/main')
        this.app.set('view engine', 'ejs')
    }


    routing() {
        this.app.get('/', (req, res) => {
            res.send('Hello Word!')
        })
    }

    listing() {
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server listing on port ${process.env.PORT}`)
        })
    }
}

