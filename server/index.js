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
const url = 'mongodb+srv://jinic:jinic@cluster0-kscy7.mongodb.net/test?retryWrites=true&w=majority'

// Database Name
const dbName = 'fwr-todolist'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err)
    console.log('Connected Successfully to server')

    const db = client.db(dbName)
    const collection = db.collection('todolist')

    // Read
    router.get('/', (req, res) => { // 2
        // find({}): 전체 다 불러옴
        collection.find({}).toArray((err, result) => { // 3
            assert.equal(null, err)
            console.log('Read result: ', result)
            res.json(result)
        })
    })

    // Create
    router.post('/', (req, res) => { // 2
        const { text } = req.body
        const insert = {
            text
        }
        collection.insertOne(insert, (err, result) => { // 3
            assert.equal(null, err)
            console.log('Create result: ', result.ops[0])
            res.json(result.ops[0])
        })
    })

    // Update
    router.put('/', (req, res) => { // 2
        const { _id, text } = req.body
        const find = {
            _id: new mongodb.ObjectId(_id)
        }
        const update = {
            $set: {
                text
            }
        }
        const updateOptions = {
            returnOriginal: false
        }

        collection.findOneAndUpdate(find, update, updateOptions, (err, result) => { // 3
            assert.equal(null, err)
            console.log('Update result: ', result.value)
            res.json(result.value)
        })
    })

    // Delete
    router.delete('/', (req, res) => { // 2
        const find = {
            _id: new mongodb.ObjectId(req.body_id)
        }

        collection.findOneAndDelete(find, (err, result) => { // 3
            assert.equal(null, err)
            console.log('Delete result: ', result.value)
            res.json(result.value)
        })
    })
})

app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`)
})
