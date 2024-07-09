const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  image: {
  type:String,
   default:"https://images.unsplash.com/photo-1719658415828-82c795a40bef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
  },
  price: {
    type: Number,
    default: 0 
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  }
});

const listing = mongoose.model('listing', listingSchema);
module.exports = listing;
