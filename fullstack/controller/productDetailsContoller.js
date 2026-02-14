import { MongoClient, ObjectId } from "mongodb";
import { configDotenv } from 'dotenv';
configDotenv()
const url = process.env.DATABASE_URL;
console.log(url)
const client = new MongoClient(url);

export const productDetailsController = async (req, res) => {
  try {
    const id = req.params.id;

    await client.connect();

    const db = client.db("restaurant");
    const collection = db.collection("products");

    const data = await collection.findOne({ _id: new ObjectId(id) });

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      });
    }

    res.render("details", { data });

  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
