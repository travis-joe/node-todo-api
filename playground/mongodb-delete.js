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


	// db.collection('Todos').deleteMany({text: 'Eat launch'}).then( (res) => {
	// 	console.log(res)
	// })

	// db.collection('Todos').deleteOne({text: 'Eat launch'}).then( (res) => {
	// 	console.log(res)
	// })

	// db.collection('Todos').findOneAndDelete({completed: false}).then( (res) => {
	// 	console.log(res)
	// })

	db.close();
});