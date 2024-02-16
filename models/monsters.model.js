import mongoose from "mongoose";

// Define the Schema for the nested 'geo' object
const geoSchema = new mongoose.Schema({
    lat: String,
    lng: String
  });
  
// Define the Schema for the 'address' object
  const addressSchema = new mongoose.Schema({
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: geoSchema
  });
  
// Define the Schema for the 'company' object
const companySchema = new mongoose.Schema({
    name: String,
    catchPhrase: String,
    bs: String
  });
  

// Main Monster Schema
const monsterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: addressSchema,
    phone: String,
    website: String,
    company: companySchema,
    image_url: String
});
  
const Monster = mongoose.model('Monster', monsterSchema);

export default Monster;