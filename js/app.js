var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
MongoClient.connect('mongodb://192.168.1.120:27017/mydb', function (err, db) {
    if (err) {
        throw err;
    } 
        console.log("successfully connected to the database");
		
		var collection = db.collection('usuarios');
		var doc = {'nombre': 'Pedro'};
		collection.insert(doc, function(err, results) {});

		// Locate all the entries using find
		collection.find().toArray(function(err, results) {
			console.dir(results);
			// Let's close the db
			db.close();
		});
});