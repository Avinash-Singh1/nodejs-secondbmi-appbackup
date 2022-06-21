// const mysql = require('mysql');
const express = require('express');
// const session = require('express-session');
// const path = require('path');
var router = express.Router();

// const e = require('express');
// var bodyParser = require('body-parser');
// const expressLayouts = require('express-ejs-layouts');
var database2 = require('../database2');



// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '',
// 	database : 'dietplan-nodejsapp'
// });

// const app = express();


//app.use(express.bodyParser());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:3000/
// app.get('/', function(request, response) {
// 	// Render login template
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

// http://localhost:3000/auth
// app.post('/auth', function(request, response,next) {
// 	// Capture the input fields
// 	let username = request.body.username;
// 	let password = request.body.password;
// 	// // Ensure the input fields exists and are not empty
// 	if (username && password) {
// 		// Execute SQL query that'll select the account from the database based on the specified username and password
// 		connection.query('SELECT email,password FROM accounts WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
// 			// If there is an issue with the query, output the error
// 			// if (error) throw error;
// 			// If the account exists
// 			if (results.length > 0) {
// 				// Authenticate the user
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				// Redirect to home page
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// http://localhost:3000/home
// app.get('/home', function(request, response) {
// 	// If the user is loggedin
// 	// if (request.session.loggedin) {
// 		// Output username
// 		// response.sendFile(__dirname + '/signup.html');
		
		
// 		response.redirect("/question");
// 	// response.sendFile(path.join(__dirname + '/signup.html'));


// 	// } else {
// 	// 	// Not logged in
// 	// 	response.send('Please login to view this page!');
// 	// }
// 	response.end();
// });

// response.send('Welcome back, ' + request.session.username + '!');

// app.get("/",function(req,res){

//     // res.redirect('b.html');
// // response.send('Welcome back, ' + request.session.username + '!');

//     // res.send("i am in ");
// 			res.render('questionire', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data, message:request.flash('success')});


// });

router.get("/", function(request, response, next){

    response.render('questionire', {title:'Node.js MySQL CRUD Application'});


});

router.post("/questiondata", function(req, res, next){

    // response.render('questionire', {title:'Node.js MySQL CRUD Application'});
    
	// var mysql = require('mysql');
	// var connection = mysql.createConnection({
	// 	host: "localhost",
	// 	user:"root",
	// 	password:"",
	// 	database:"dietplan-nodejsapp"
	// });
	
	
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
			// var values=[
			// 	[myname,myage,sex,weight,height,bmi,category]
			// ];
		

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
    
                  }
            });
		  
		
});


// router.get("/", function(req, res, next){

//     res.render('resultdietscreen', {title:'Node.js MySQL CRUD Application'});


// });



// 


module.exports = router;


//  Signup starts Here 
// app.get("/signup",function(req,res){

//    	res.sendFile(path.join(__dirname + '/signup.html'));


// })

// signup authentication
//  app.post("/signupauth",function(req,res){
// 	// input values of user 

// 	var mysql = require('mysql');
// 	var connection = mysql.createConnection({
// 		host: "localhost",
// 		user:"root",
// 		password:"",
// 		database:"dietplan-nodejsapp"
// 	});
	
	
// 	//some more code to get different routes

// 		var myname = req.body.name;
// 		var myemail = req.body.email;
// 		var mypassword = req.body.psw;
		
// 		connection.connect(function(err) {

// 			if (err) {
// 				console.log("mysql error");
// 			}
// 			else
// 			{
// 				// console.log("[mysql error]",err);

// 				console.log("Connected!");
// 			}

// 			var sql = "INSERT INTO accounts (email,name,password) VALUES ?";
// 			var values=[
// 				[myemail,myname,mypassword]
// 			];
// 			connection.query(sql, [values],function (err, result) {
// 			  if (err){
// 				// console.log("[mysql error]",err);
// 				console.log(err);

// 			  }
// 			  else
// 			  {

// 				  console.log("1 record inserted");
// 			  }
// 			});
// 		  });
// 		res.redirect("/");

// 		res.end();

// //  })

 
// });

// last page starts here 

// app.post("/resultdietscreen",function(req,res){


// 	// let val =req.body.name;

// 	// res.send(val);

// 	// res.sendFile(path.join(__dirname + '/resultdietscreen.html'),{ title: 'Hey', message: 'Hello there!'});


// });

// app.post("/questiondata",function(req,res){


// 	var mysql = require('mysql');
// 	var connection = mysql.createConnection({
// 		host: "localhost",
// 		user:"root",
// 		password:"",
// 		database:"dietplan-nodejsapp"
// 	});
	
	
// 	//some more code to get different routes

// 		var myname = req.body.name;
// 		// var myemail = req.body.email;
// 		var myage = req.body.age;
// 		var sex = req.body.sex;
// 		var weight = req.body.weight;
// 		var height = req.body.height;
// 		var bmi = req.body.bmivalue;
// 		bmi = parseFloat(weight)*10000/parseFloat(height*height);
// 		// comparing bmi value for assigning ctegory value
// 		if(bmi<18.5)
// 		{
// 			category = "Underweight";
// 		}
// 	   else if(18.5<=bmi && bmi <=24.9)
// 		{
// 			category = "Normal Weight";
// 		}
// 		else if(25<=bmi && bmi <=29.9)
// 		{
// 			category = "Overweight";
// 		}
// 		else if(30<=bmi && bmi <=35)
// 		{
// 			category = "Obese";
// 		}
// 		else if (35 <= bmi)
// 		{
// 		category = "Extremely obese";
	
// 		}

	
		
// 		connection.connect(function(err) {

// 			if (err) {
// 				console.log("mysql error");
// 			}
// 			else
// 			{
// 				// console.log("[mysql error]",err);

// 				console.log("Connected!");
// 			}

// 			var sql = "INSERT INTO userdetails (name,age,sex,weight,height,bmivalue,category) VALUES ?";
// 			var values=[
// 				[myname,myage,sex,weight,height,bmi,category]
// 			];
// 			connection.query(sql, [values],function (err, result) {
// 			  if (err){
// 				// console.log("[mysql error]",err);
// 				console.log(err);

// 			  }
// 			  else
// 			  {

// 				  console.log("1 record inserted");
// 							//   res.send("Done, data saved successfully");
// 				// res.sendFile(__dirname+"/resultdietscreen");
// 					// res.redirect("/resultdietscreen");
// 				// res.render('resultdietscreen', {locals: {title: 'Welcome!'}});



// 			  }
// 			});
// 		  });
// 		// res.redirect("/resultdietscreen.html");
// 	// res.sendFile(path.join(__dirname + '/resultdietscreen.html'));
//     res.sendFile(__dirname+"/resultdietscreen.html");
// 		// res.redirect("/resultdietscreen");
// 	// res.sendFile(path.join(__dirname + '/resultdietscreen.html'),{ title: 'Hey', message: 'Hello there!'});

// 		// res.redirect("/resultdietscreen");

// 	// res.send("Done, data saved successfully");

// 		// res.end();

// //  })

// });
	// const express = require('express'),
	// es6Renderer = require('express-es6-template-engine'),
	// app = express();
	
// //   app.engine('html', es6Renderer);
//   app.set('views', 'views');
//   app.set('view engine', 'html');
   
//   app.get('/resultdietscreen', function(req, res) {
// 	res.render('resultdietscreen', {locals: {title: 'Welcome!'}});
//   });
   


//   app.listen(3000);
  
