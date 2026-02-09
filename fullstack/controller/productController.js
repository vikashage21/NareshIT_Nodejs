import { MongoClient } from "mongodb"
const URL = "mongodb://localhost:27017";
const dbName = 'restaurant';
const collectionName = "products";






export const productController = async (req, res) => {
    try {
        const client = new MongoClient(URL);
        await client.connect();
        console.log('connected to mongodb database successfully ✔️')
        const DB = client.db(dbName);
        const COLLECTION = DB.collection(collectionName)
        const PRODUCTS = await COLLECTION.find({}).toArray()


     
        // res.status(200).json({
        //     success: true,
        //     count: PRODUCTS.length,
        //     data: PRODUCTS
        // })

        res.render('product' ,{PRODUCTS})

    } catch (error) {
        console.log('error while fetching products'), res.status(500).json({
            success: false,
            message: error.message
        })
    }

}