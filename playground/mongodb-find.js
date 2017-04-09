/**
 * Created by qzy on 09/04/2017.
 * File description:
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if(err){
		console.log('Unale to connect to MongoDB server')
	}
	console.log('Connected to MongoDB server')

	// db.collection('Todos').find({
	// 	_id: new ObjectID("58e9bbb2d002f81b564d493e")
	// }).toArray().then( (doc) => {
	// 	console.log('Todos')
	// 	console.log(JSON.stringify(doc, undefined, 2))
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err)
	// })


	db.collection('Todos').find().count().then( (count) => {
		console.log(`counts: ${count}`)
	}, (err) => {
		console.log('Unable to fetch todos', err)
	})

	db.close();
});