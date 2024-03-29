const express = require('express')
const app = express()
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 3001;

// middleware
app.use(cors())
app.use(express.json())

// UniFacilityFinder
// Q5Kv9PAW8zrIO4Rv



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://UniFacilityFinder:Q5Kv9PAW8zrIO4Rv@cluster0.b0yctrm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        const usersCollection = client.db('UniFacilityFinder').collection('users');
        const collegeCollection = client.db('UniFacilityFinder').collection('collegeDetails');
        const admissionCollection = client.db('UniFacilityFinder').collection('admission');
        const reviewsCollection = client.db('UniFacilityFinder').collection('reviews');


        app.post('/all-users-post', async (req, res) => {
            const data = req.body;
            const query = { email: data.email }
            const existingUser = await usersCollection.findOne(query)
            if (existingUser) {
                return res.send({ message: 'User already exits' })
            }
            const result = await usersCollection.insertOne(data)
            res.send(result)
        })

        app.get('/all-users', async (req, res) => {
            const result = await usersCollection.find({}).toArray()
            res.send(result)
        })

        app.get('/college-details', async (req, res) => {
            const result = await collegeCollection.find({}).toArray()
            res.send(result)
        })

        app.get('/college-detail/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await collegeCollection.findOne(query)
            res.send(result)
        })

        // admission form
        app.post('/admission-data', async (req, res) => {
            const data = req.body;
            /* const query = { email: data.email }
            const exitingUser = await admissionCollection.findOne(query)
            if (exitingUser) {
                return res.send({ message: 'Already admitted' })
            } */
            const result = await admissionCollection.insertOne(data)
            res.send(result)
        })
        app.get('/admission-all-data', async (req, res) => {
            let query = {};
            if (req.query?.studentEmail) {
                query = { studentEmail: req.query.studentEmail }
            }
            const result = await admissionCollection.find(query).toArray();
            res.send(result)
        })

        app.patch('/profile-details-update/:id', async (req, res) => {
            const data = req.body;
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updateDoc = {
                $set: {
                    studentName: data.studentName,
                    studentEmail: data.studentEmail,
                    admittedCollegeName: data.admittedCollegeName,
                    address: data.address
                }
            }
            const result = await admissionCollection.updateOne(filter, updateDoc)
            res.send(result)
        })

        app.get('/review/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await admissionCollection.findOne(query)
            res.send(result)
        })

        app.post('/reviews-data', async (req, res) => {
            const data = req.body;
            const result = await reviewsCollection.insertOne(data)
            res.send(result)
        })

        app.get('/all-reviews', async (req, res) => {
            const result = await reviewsCollection.find({}).toArray()
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("database is connected");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('UniFacilityFinder server is running!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
