
//Require mongoose package
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
//Define Source document with title, description and category
const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  abstract: String,
  link:String,
  start_date: Date,
  end_date:Date,
  research_scope: String,
  geographic_scope: String
});

//Create a model using mongoose.model and export it
const events = module.exports = mongoose.model('events', eventSchema );


//BucketList.find() returns all the lists
module.exports.getAll = (callback) => {
  events.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.add = (newEvent, callback) => {
  newEvent.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteById = (id, callback) => {
  let query = {_id: id};
  events.remove(query, callback);
}

//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.getById = (id, callback) => {
  let query = {_id: id};
  events.findOne({_id: id}, callback);
}

module.exports.addAll=(eventList,callback)=>{
  events.insertMany(eventList, callback);
}

module.exports.deleteAll=(callback)=>{
  events.collection.drop(callback);
}

module.exports.query = (queryExp,callback) => {
  console.log(queryExp);
  console.log(JSON.stringify(queryExp));

  var obj= {$and:queryExp};
  events.find(obj,callback);
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
