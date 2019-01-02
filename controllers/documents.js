//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const document = require('../models/Document');


//GET HTTP method to /bucketlist
router.get('/init', (req, res) => {
  document.getAll((err, result) => {
    if (err) {
      res.json({ success: false, message: `Failed to load all lists. Error: ${err}` });
    }
    else {
      res.write(JSON.stringify({ success: true, docs: result }, null, 2));
      res.end();

    }
  });
});

//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
  document.getAll((err, result)=> {
    if(err) {
      res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
    }
    else {
      res.write(JSON.stringify({success: true, docs:result},null,2));
      res.end();

    }
  });

});


//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
  console.log(req.body);
  let newDoc = new document({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    content: req.body.content,
    doctype: req.body.doctype

  });
  document.add(newDoc,(err, result) => {
    if(err) {
      res.json({success: false, message: `Failed to create a new list. Error: ${err}`});
      res.write(JSON.stringify({success: true, message: `Failed to create a new list. Error: ${err}`}));
    }
    else
    res.json({success:true, message: "Added successfully."});
    res.write(JSON.stringify({success: true, message: "Added successfully."}));

  });
});


router.post('/insertmany', (req,res,next) => {
  document.addAll(req.body,(err, result) => {
    if(err) {
      res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

    }
    else
    res.json({success:true, message: "Added successfully."});

  });
});

//DELETE HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
  let id = req.params.id;
  console.log(id);
  document.deleteById(id,(err,result) => {
    if(err) {
      res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
    }
    else if(list) {
      res.json({success:true, message: "Deleted successfully"});
    }
    else
    res.json({success:false});
  })
});

//Get HTTP method to /bucketlist. Here, we pass in a params which is the object id.
router.get('/:id', (req,res,next)=> {
  let id = req.params.id;
  console.log(id);
  document.getById(id,(err,result) => {
    if(err) {
      res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
    }
    else if(list) {
      res.write(JSON.stringify({success: true, doc:result},null,2));
      res.end();
    }
    else
    res.json({success:false});
  })
});

router.post('/query', (req,res,next)=> {
  let str = req.body.querystr;
  console.log("querystr: "+ JSON.stringify(str));
  document.query(str,(err,result) => {
    if(err) {
      console.log("err: "+ err);
      res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
    }
    else if(result) {
      console.log("result: "+ result);
      res.write(JSON.stringify({success: true, docs:result},null,2));
      res.end();
    }
    else
    res.json({success:false});
  })
});

module.exports = router;
