// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
                   

// login is starting from here 


const express = require('express');

var router = express.Router();


var database2 = require('../database2');
















// http://localhost:3000/
router.get('/', function(request, response) {
	// Render login template
	response.render("login");
});

// http://localhost:3000/auth
router.post('/auth', function(request, response,next) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// // Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		database2.query('SELECT email,password FROM accounts WHERE email = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			// if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('questionire');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});



// // http://localhost:3000/home
// app.get('/home', function(request, response) {
// 	// If the user is loggedin
// 	// if (request.session.loggedin) {
// 		// Output username
// 		// response.sendFile(__dirname + '/signup.html');
		
		
// 		response.redirect("/questionire");
// 	// response.sendFile(path.join(__dirname + '/signup.html'));


// 	// } else {
// 	// 	// Not logged in
// 	// 	response.send('Please login to view this page!');
// 	// }
// 	response.end();
// });
module.exports = router;

