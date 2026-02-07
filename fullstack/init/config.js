import { MongoClient } from "mongodb";
import { fakeProducts } from "./data.js";

const URL = "mongodb://127.0.0.1:27017";
const dbName = "restaurant";
const collectionName = "products";

const insertData = async () => {
  const client = new MongoClient(URL);

  try {
    await client.connect();
    console.log("Connected to MongoDB ✔️");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const result = await collection.insertMany(fakeProducts);

    console.log("Data inserted successfully ✅");
    console.log("Inserted Count:", result.insertedCount);
    console.log("Inserted IDs:", result.insertedIds);

  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    await client.close();
  }
};

insertData();
