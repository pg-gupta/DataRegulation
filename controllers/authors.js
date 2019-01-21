//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const authors = require('../models/Author');


//GET HTTP method to
router.get('/',(req,res) => {
    authors.getAll((err, result)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, authors:result},null,2));
			res.end();

	}
	});

});


//POST HTTP method to /bucketlist

router.post('/insert', (req,res,next) => {
	console.log(req.body);
    let newauthor = new authors({
		name: req.body.name,
		age: req.body.age
	});
    authors.addList(newauthor,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else
			res.json({success:true, message: "Added successfully."});

	});
});

router.post('/insertmany', (req,res,next) => {
  console.log(req.body);
  authors.addAll(req.body,(err, list) => {
    if(err) {
      res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

    }
    else
    res.json({success:true, message: "Added successfully."});

  });
});

router.post('/deleteAll', (req,res,next) => {
  authors.deleteAll(req.body,(err, result) => {
    if(err) {
      res.json({success: false, message: `Failed to deletelist. Error: ${err}`});
    }
    else
    res.json({success:true, message: "Deleted successfully."});

  });
});

router.post('/insertauthor', (req,res,next) => {
  console.log(req.body);
  authors.add(req.body,(err, list) => {
    if(err) {
      res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

    }
    else
    res.json({success:true, message: "Added successfully."});

  });
});


router.post('/query',(req,res) => {
    authors.query(req.body,(err, result)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, authors:result},null,2));
			res.end();

	}
	});

});
module.exports = router;
