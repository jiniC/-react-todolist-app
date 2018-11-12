const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const assert = require('assert')

const app = express()
const PORT = 3001;
const router = express.Router()
const MongoClient = mongodb.MongoClient

// middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)

// Connection URL
const url = 'mongodb://eedaihee:rhrh0903@ds117869.mlab.com:17869/fwr-todolist'

// Database Name
const dbName = 'fwr-todolist'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err)
    console.log('Connected Successfully to server')

    const db = client.db(dbName)
    const collection = db.collection('todolist')

    // Read (get으로 요청)
    router.get('/', (req, res) => {
        // 모든게 다 불러짐  
        collection.find({
        }).toArray((err, result) => {
            assert.equal(null, err)
            console.log(result) // -> 화면에 뿌려줘야함
            res.json(result)
        })
    })

    // Create
    router.post('/', (req, res) => {

    })

    // Update
    router.put('/', (req, res) => {

    })

    // Delete
    router.delete('/', (req, res) => {

    })
})

app.get('/', (req, res) => {
    res.end('get')
})

app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`)
})
