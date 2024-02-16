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
    name: { type: String, required: true },
    username: String,
    email: String,
    address: addressSchema,
    phone: String,
    website: String,
    company: companySchema,
    image_url: { type: String, required: true }
});

// Pre-save hook to handle 'id' field incrementation
monsterSchema.pre('save', async function (next) {
    if (this.isNew) { // We only want to do this if the document is new
      try {
        const lastMonster = await mongoose.model('Monster').findOne({}).sort('-id'); // Find the last monster by the highest 'id'
        if (lastMonster) {
          this.id = lastMonster.id + 1; // Increment the highest id by 1
        } else {
          this.id = 1; // If there are no monsters, start with id 1
        }
        next();
      } catch (error) {
        next(error);
      }
    } else {
      next(); // If the document isn't new, just proceed without incrementing 'id'
    }
  });

const Monster = mongoose.model('Monster', monsterSchema);

export default Monster;