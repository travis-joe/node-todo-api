const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if(err){
		console.log('Unale to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')
	// db.collection('Todos').insertOne({
	// 	text:'Sth to do',
	// 	completed: false,
	// }, (err, res) => {
	// 	if(err){
	// 		return console.log('Unable to insert todo', err)
	// 	}
	//
	// 	console.log(JSON.stringify(res.ops, undefined, 2))
	// })

	// db.collection('User').insertOne({
	// 	name: 'Travis Joe',
	// 	age: 30,
	// 	location: 'HangZhou',
	// }, (err, res) => {
	// 	if(err) {
	// 		return console.log('Unable to insert user', err)
	// 	}
	// 	console.log(res.ops[0]._id.getTimestamp());
	// })

	db.close();
});