const mongoose= require('mongoose');
const initData= require('./data1.js');
const listing= require('../models/listing.js');
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  
  mongoose.connect(MONGO_URL);
}
const initDB=async ()=>{
   await listing.deleteMany({});
   await listing.insertMany(initData.data1);
   console.log("initialized database with sample data");
}
initDB();