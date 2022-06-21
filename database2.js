const mysql = require('mysql');

// create connection for databases

const connection2 = mysql.createConnection({
	host     : 'localhost',
	database : 'dietplan-nodejsapp',
	user     : 'root',
	password : ''
});
connection2.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection2;