// const mysql = require('mysql');
const express = require('express');
// const session = require('express-session');
// const path = require('path');
var router = express.Router();

// const e = require('express');
// var bodyParser = require('body-parser');
// const expressLayouts = require('express-ejs-layouts');
var database2 = require('../database2');

// router.get("/", function(request, response, next){

//     response.render('resultdietscreen', {title:'Node.js MySQL CRUD Application'});

// });
router.get("/", function(req, res, next){
    
  // res.render('resultdietscreen', {title:'Node.js MySQL CRUD Application'});
  // res.send("hellow world");
  var sql =" SELECT * FROM userdetails ";
              var sql2 =" SELECT * FROM dietplan ";

			// var values=[
			// 	[myname,myage,sex,weight,height,bmi,category]
			// ];
            database2.query(sql,function (err, data){

              if(err)
              {
                // throw error; 
                res.send("error in fetching data");
              }
              else
              {
                console.log("sql executed succesfully");
              // res.render('resultdietscreen', {title:'Node.js MySQL CRUD Application', action:'result'});
              }

              var sql2 =" SELECT * FROM dietplan ";
              database2.query(sql2, function (err, result){
  
                if(err)
                {
                  // throw error; 
                  res.send("error in fetching data2");
                }
                else
                {
                  
                    console.log("sql2 executed succesfully");
                  // res.render('resultdietscreen', {title:'Node.js MySQL CRUD Application', action:'result', resultData:data,resultData2:data2});
                  res.render('resultdietscreen', {title:'Node.js MySQL CRUD Application', action:'result', resultData:data,resultData2:result});
                }
              });
  
            });


          

  
});

// router.get("/", function(req, res, next){

	

		
		
		  
		
// });


module.exports = router;

