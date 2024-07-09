const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js"); // Note the capitalization for the model name
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

console.log("Static files served from:", path.join(__dirname, '/public'));
console.log("Views directory:", path.join(__dirname, 'views'));

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/testlisting", async (req, res) => {
//   let sample = new Listing({
//     title: "Sample Listing",
//     description: "This is a sample listing",
//     image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 199.99,
//     location: "Bihar",
//     country: "India"
//   });
//   await sample.save();
//   console.log(sample.image);
//   res.send("Sample was saved");
// });
app.get("/listing", async (req, res) => {
  try {
    let listings = await Listing.find({});
    console.log(`Total listings found: ${listings.length}`);

    listings.forEach((listing, index) => {
      console.log(`Listing ${index + 1}: ${listing.image}`);
    });

    res.render('index', { listings: listings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).send("Error fetching listings");
  }
});


app.get('/listing/new', (req, res) => {
  res.render('new');
});

app.post('/listing', async (req, res) => {
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect('/listing');
});

app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  res.render('show', { listing: list });
});

app.put('/listing/:id', async (req, res) => {
  let { id } = req.params;
  try {
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect('/listing');
  } catch (err) {
    console.error("Update error:", err);
    res.send("An error occurred while updating the listing.");
  }
});

app.delete('/listing/:id', async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect('/listing');
});

app.get('/listing/:id/edit', async (req, res) => {
  let { id } = req.params;
  let list = await Listing.findById(id);
  res.render('edit', { listing: list });
});

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
