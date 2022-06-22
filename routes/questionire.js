// const mysql = require('mysql');
const express = require('express');
// const session = require('express-session');
// const path = require('path');
var router = express.Router();

// const e = require('express');
// var bodyParser = require('body-parser');
// const expressLayouts = require('express-ejs-layouts');
var database2 = require('../database2');


router.get("/", function(request, response, next){

    response.render('questionire', {title:'Node.js MySQL CRUD Application'});


});

router.post("/questiondata", function(req, res, next){


	//some more code to get different routes

		var myname = req.body.name;
		// var myemail = req.body.email;
		var myage = req.body.age;
		var sex = req.body.sex;
		var weight = req.body.weight;
		var height = req.body.height;
		var bmi = req.body.bmivalue;
		bmi = parseFloat(weight)*10000/parseFloat(height*height);
		// comparing bmi value for assigning ctegory value
		
		if(bmi<18.5)
		{
			category = "Underweight";
		}
	   else if(18.5<=bmi && bmi <=24.9)
		{
			category = "Normal Weight";
		}
		else if(25<=bmi && bmi <=29.9)
		{
			category = "Overweight";
		}
		else if(30<=bmi && bmi <=35)
		{
			category = "Obese";
		}
		else if (35 <= bmi)
		{
		category = "Extremely obese";
	
		}

			
		var sql = `INSERT INTO userdetails (name,age,sex,weight,height,bmivalue,category) VALUES ("${myname}","${myage}","${sex}","${weight}","${height}","${bmi}","${category}")`;
		
            database2.query(sql, function (err, result){

                if (err){
                    // console.log("[mysql error]",err);
                    console.log(err);
                  }
                  else
                  {
                    //   console.log("1 record inserted");
		            //  res.redirect("/questionire");
					req.flash('success', 'Sample Data Inserted');
		        	// res.redirect("/resultdietscreen");
					// res.send("Data inserted successfully");
  					res.redirect('/resultdietscreen');

    
                  }
            });
		  
		
});



module.exports = router;

