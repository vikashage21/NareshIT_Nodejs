import express from 'express';
import fileUpload from 'express-fileupload';
import { connectDb } from './db/conn.js';
import { Image } from './model/imageSchema.js';

const app = express()
const port = process.env.PORT || 8000
// using fileupload as middlewares

app.use(fileUpload())



// setting ejs 

app.set('view engine', 'ejs');

app.use(express.static('public'))


// routes

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/profile', (req, res) => {
    try {
        const file = req.files
        console.log(req.body)
        const imageFile = req.files.profile;

        console.log(file)

        imageFile.mv(`./public/image/${imageFile.name}`, async (error, data) => {
            if (error) throw error;
            const response = await Image.create({
                url: `/image/${imageFile.name}`
            })
            console.log('image save in database', response)
            res.render('display', {
                title: req.body.imgName,
                image: imageFile.name
            })

        })
    } catch (error) {
        console.log(error)

    }
})

// get all images

app.get('/image', async (req, res) => {

    const imageAll = await Image.find({})
    res.render('image', { imageAll })
})

connectDb(
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`server is listing on port ${port}`)
    })
)