
//Require mongoose package
const mongoose = require('mongoose');

//Define Source document with title, description and category
const authorSchema = mongoose.Schema({
    name: String,
    age: String
});

//Create a model using mongoose.model and export it
const authors = module.exports = mongoose.model('authors', authorSchema );


//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
    authors.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
// module.exports.deleteListById = (id, callback) => {
// 	let query = {_id: id};
//     authors.remove(query, callback);
// }

//We pass on an id and remove it from DB using Bucketlist.remove()
// module.exports.getListById = (id, callback) => {
// 	let query = {_id: id};
//   authors.findOne({_id: id}, callback);
// }

module.exports.getJsonData = () => {
    var data = [{
        "name": "testdoc",
        "age": 56
    }];
    return data;
}
