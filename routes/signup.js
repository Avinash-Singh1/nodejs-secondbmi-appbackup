// const mysql = require('mysql');
const express = require('express');
var router = express.Router();

var database2 = require('../database2');

router.get("/", function(request, response, next){

    response.render('signup', {title:'Node.js MySQL CRUD Application'});


});

router.post("/signupdata", function(req, res, next){


	//some more code to get different routes

	var myname = req.body.name;
	var myemail = req.body.email;
	var mypassword = req.body.psw;
	
	
		// var sql = "INSERT INTO accounts (email,name,password) VALUES ?";
	var sql = `INSERT INTO accounts (email,name, password) VALUES ("${myemail}","${myname}","${mypassword}")`;

		// var values=[
		// 	[myemail,myname,mypassword]
		// ];
		database2.query(sql,function (err, result) {
		  if (err){
			// console.log("[mysql error]",err);
			console.log(err);
		 // res.render("login failed");


		  }
		  else
		  {

			  console.log("1 user record inserted successfully");
			  res.render("login");
				// req.flash('success', 'Sample Data Inserted');
		        	// res.redirect("/resultdietscreen");
					// res.send("Data inserted successfully");
  					// res.redirect('/login');

		  }
		
	  });
			
	
		
});



module.exports = router;

