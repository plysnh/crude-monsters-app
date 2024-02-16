import express from "express";
import bodyParser from "body-parser";
import monstersRoute from "./routes/monsters.route.js";
// import { connectDB } from "./database/database.js";

const app = express();
const port = 7000;

// connectDB();
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://nhiphanley:Danang7@cluster0.zf5ukdh.mongodb.net/?retryWrites=true&w=majority";

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
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use("/", monstersRoute);

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});