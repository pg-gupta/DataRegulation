
//Require mongoose package
const mongoose = require('mongoose');

//Define Source document with title, description and category
const iitsummariesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    url: String,
    doctype: String,
    content:String
});

//Create a model using mongoose.model and export it
const iitsummaries = module.exports = mongoose.model('iitsummaries', iitsummariesSchema );


//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
    iitsummaries.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
    iitsummaries.remove(query, callback);
}

//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.getListById = (id, callback) => {
	let query = {_id: id};
  iitsummaries.findOne({_id: id}, callback);
}

module.exports.getJsonData = () => {
    var data = [{
        "title": "testdoc",
        "description": "test",
        "url": "test//doc",
        "content": "req.body.content",
        "doctype": "pdf"
    }];
    return data;
}
