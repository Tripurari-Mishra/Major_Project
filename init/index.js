const mongoose = require("mongoose");
const Listing = require("../models/listing");
const initdata = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDb = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj)=>({...obj,owner:"68c2d4d145eff1a45accbe8c"}))
  await Listing.insertMany(initdata.data);
  console.log("data was initialize");
};

initDb();
