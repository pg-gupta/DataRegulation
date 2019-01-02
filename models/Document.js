
//Require mongoose package
const mongoose = require('mongoose');

//Define Source document with title, description and category
const documentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link:String,
  abstract:String,
  authors: new Array(),
  version_date: String,
  keywords: new Array(),
  no_of_pages:Number,
  research_status: String,
  research_scope: String,
  type_of_article: String,
  geographic_scope: String,
  citations: new Array(),
  supplementary:String
});

//Create a model using mongoose.model and export it
const documents = module.exports = mongoose.model('documents', documentSchema );


//BucketList.find() returns all the lists
module.exports.getAll = (callback) => {
  documents.find(callback);
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
  // var papers = [{ title: 'Paper 1', description: "saff", url: "wetewte",doctype:'asdaff',content:'fhjgkgj'  },
  // { title: 'Paper 2', description: "sfaff", url: "rwtwtet",doctype:'asdaff',content:'fhjgkgj' },
  // { title: 'Paper 3', description: "twttew", url: "ewrwetey",doctype:'asdaff',content:'fhjgkgj' }];

  documents.insertMany(docs, callback);
}

module.exports.query = (queryExp,callback) => {
  var obj={$or:queryExp};
  documents.find(obj,callback);
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
