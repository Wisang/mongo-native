
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "very good"
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "very good"
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "very good"
});

Fruit.insertMany([kiwi, banana], function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Success");
  }
})

// fruit.save();
