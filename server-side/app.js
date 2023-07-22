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



const { MongoClient, ServerApiVersion } = require('mongodb');
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
        await client.connect();
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
