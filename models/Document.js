
//Require mongoose package
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
//Define Source document with title, description and category
const documentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link:{
    type:String,
    required:true
  },
  abstract:String,
  authors: new Array(),
  version_date: Date,
  keywords: new Array(),
  no_of_pages:Number,
  research_status: String,
  research_scope: String,
  type_of_article: String,
  geographic_scope: String,
  citations: new Array(),
  supplementary:String,
  isemphasized:Boolean
});

// documentSchema.index({ title: 1, link: 1}, { unique: true });
documentSchema.index({title: "text",abstract:"text",authors:"text",keywords:"text",research_status:"text",
research_scope:"text",type_of_article:"text",type_of_article:"text",geographic_scope:"text",citations:"text",supplementary:"text"});


//Create a model using mongoose.model and export it
const documents = module.exports = mongoose.model('documents', documentSchema );
//BucketList.find() returns all the lists
module.exports.getAll = (callback) => {
  var query={};
  documents.find(null,null,query,callback).sort('-version_date');
}

module.exports.deleteAll = (callback) => {
  documents.collection.drop(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.add = (newDoc, callback) => {
  newDoc.save(callback);
}


//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.deleteById = (id, callback) => {
  let query = {_id: id};
  documents.remove(query, callback);
}

//We pass on an id and remove it from DB using Bucketlist.remove()
module.exports.getById = (id, callback) => {
  let query = {_id: id};
  documents.findOne({_id: id}, callback);
}

module.exports.addAll=(docs,callback)=>{
  documents.insertMany(docs, callback);
}

module.exports.query = (queryExp,no_of_pages,callback) => {
  console.log(JSON.stringify(queryExp));
  var exp=JSON.stringify(queryExp);
  var query={};
  query.skip = 10*no_of_pages;
  query.limit = 10;
  if(exp!="{}"&& exp!="[]"){
    var obj= {$and:queryExp};
  }
  documents.find(obj,null,query,callback).sort('-version_date');
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
