// Import necessary modules
const mongoose = require('mongoose');


// Connect to MongoDB database using Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema for Person
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: [{ type: String }]
});

// Create Person Model
const Person = mongoose.model('Person', personSchema);

// Create and Save a Record of a Model
const createAndSavePerson = (done) => {
    const person = new Person({ name: 'John', age: 30, favoriteFoods: ['Pizza', 'Burger'] });
    person.save(function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

// Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

// Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

// Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

// Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
    Person.findById(personId, function (err, data) {
        if (err) return console.error(err);
        done(null, data);
    });
};

// Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
    Person.findById(personId, function (err, person) {
        if (err) return console.error(err);
        person.favoriteFoods.push('hamburger');
        person.save(function (err, updatedPerson) {
            if (err) return console.error(err);
            done(null, updatedPerson);
        });
    });
};

// Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
    Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, function (err, updatedPerson) {
        if (err) return console.error(err);
        done(null, updatedPerson);
    });
};

// Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
    Person.findByIdAndRemove(personId, function (err, removedPerson) {
        if (err) return console.error(err);
        done(null, removedPerson);
    });
};

// MongoDB and Mongoose - Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
    Person.remove({ name: 'Mary' }, function (err, deletionInfo) {
        if (err) return console.error(err);
        done(null, deletionInfo);
    });
};

// Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
    Person.find({ favoriteFoods: 'burritos' })
        .sort('name')
        .limit(2)
        .select('-age')
        .exec(function (err, data) {
            if (err) return console.error(err);
            done(null, data);
        });
};

// Export functions
module.exports = {
    createAndSavePerson,
    createManyPeople,
    findPeopleByName,
    findOneByFood,
    findPersonById,
    findEditThenSave,
    findAndUpdate,
    removeById,
    removeManyPeople,
    queryChain
};
