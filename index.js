const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//UserName: homeRent
//password: cse327  /  home123456


const port = process.env.PORT || 7000;


// MongoDB
const uri = "mongodb+srv://homeRent:home123456@cluster0.j1xrd.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('hitting the database')
    client.close();
});


// const uri = "mongodb+srv://samiasultana:niha123456789@cluster0.twsqskx.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     console.log('hitting the database');
//     const user = { name: 'Sayma Sultana', email: 'sayma@gmail.com' }
//     collection.insertOne(user)
//         .then(() => {
//             console.log('insert success');
//         })
//     // client.close();
// });



app.get('/', (req, res) => {
    res.send('Hello World! my name is Niti')
})

const reviews = [
    { id: 1, name: 'Niti', email: 'niti@gmail.com', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo natus delectus, laudantium explicabo repudiandae. Vel nisi natus doloribus omnis consequuntur culpa eos deleniti ipsum dolores quibusdam quasi perferendis veritatis quos minima earum veniam pariatur eius temporibus iste, id voluptatem! Quibusdam aliquid amet aperiam est non repudiandae accusantium doloremque repellendus?' },
    { id: 2, name: 'Niti2', email: 'niti@gmail.com', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo natus delectus, laudantium explicabo repudiandae. Vel nisi natus doloribus omnis consequuntur culpa eos deleniti ipsum dolores quibusdam quasi perferendis veritatis quos minima earum veniam pariatur eius temporibus iste, id voluptatem! Quibusdam aliquid amet aperiam est non repudiandae accusantium doloremque repellendus?' },
    { id: 3, name: 'Niti3', email: 'niti@gmail.com', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo natus delectus, laudantium explicabo repudiandae. Vel nisi natus doloribus omnis consequuntur culpa eos deleniti ipsum dolores quibusdam quasi perferendis veritatis quos minima earum veniam pariatur eius temporibus iste, id voluptatem! Quibusdam aliquid amet aperiam est non repudiandae accusantium doloremque repellendus?' },
    { id: 4, name: 'Niti4', email: 'niti@gmail.com', detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo natus delectus, laudantium explicabo repudiandae. Vel nisi natus doloribus omnis consequuntur culpa eos deleniti ipsum dolores quibusdam quasi perferendis veritatis quos minima earum veniam pariatur eius temporibus iste, id voluptatem! Quibusdam aliquid amet aperiam est non repudiandae accusantium doloremque repellendus?' }
]

// Review GET Method
app.get('/reviews', (req, res) => {
    res.send(reviews);
})

// Review POST Method
app.post('/reviews', (req, res) => {
    const newReview = req.body;
    newReview.id = reviews.length;
    reviews.push(newReview);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newReview));
    res.json(newReview)

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})