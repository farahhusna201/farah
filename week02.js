const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.4lkd5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  if (err){
    console.log(err.message)
    return
  }
  console.log("Connected to mongodb");

  let result = client.db('Database').collection('abc').insertOne({
    name: 'Davion Quigley',
    city: '姚门市',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/991.jpg',
    pass: '$2a$10$7UculaO2uj8FPDAj9zDVqOWIKLimdGjyk5l4.lsP5kyv2tuJ.ra/u',
  })

  //client.db().admin().listDatabases().then(result =>{
  // console.log(result['databases'][6]);
  //})

  //client.db('sample_training').listCollections().toArray().then(result=>{
  //  console.log(result);
  //})

  //client.db('sample_training').collection('grades').find({'class_id': 339}).toArray().then(result=>{
   // console.log(result);
  //})

});
