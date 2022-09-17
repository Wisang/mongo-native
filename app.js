// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";

// to initiat change for git
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "peach",
  rating: 10,
  review: "very good"
});

const pear = new Fruit({
  name: "pear",
  rating: 10,
  review: "pear is always very good"
});

// pear.save();
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37,
  favoriteFruit: pear
});

person.save();

// person.save();

// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// Person.deleteMany({name: 'John'}, function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted");
//   }
// });

// Fruit.updateOne({_id: "63254679dfe9c79206f6e20c"}, {name: "new pear"}, function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Successfully updated");
//   }
// });

// Fruit.deleteOne({name: "peach"}, function(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("Successfully deleted");
//   }
// });
