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
  let newDoc = new document(req.body);
  document.add(newDoc,(err) => {
    if(err) {
      res.json({success: false, message: `Failed to create a new list. Error: ${err}`});
    }
    else
    res.json({success:true, message: "Added successfully."});

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

router.post('/deleteAll', (req,res,next) => {
  document.deleteAll(req.body,(err, result) => {
    if(err) {
      res.json({success: false, message: `Failed to deletelist. Error: ${err}`});
    }
    else
    res.json({success:true, message: "Deleted successfully."});

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
    else if(result) {
      res.write(JSON.stringify({success: true, doc:result},null,2));
      res.end();
    }
    else
    res.json({success:false});
  })
});

router.post('/query/:no_of_pages', (req,res,next)=> {
  let str = req.body.querystr;
  let pages=req.params.no_of_pages;
  console.log("querystr: "+ JSON.stringify(str));
  document.query(str,pages,(err,result) => {
    if(err) {
      console.log("err: "+ err);
      res.json({success:false, message: `Failed to query the list. Error: ${err}`});
    }
    else if(result) {
      res.write(JSON.stringify({success: true, docs:result},null,2));
      res.end();
    }
    else
    res.json({success:false});
  })
});

module.exports = router;
