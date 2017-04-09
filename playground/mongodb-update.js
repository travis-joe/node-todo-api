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


	// db.collection('Todos').findOneAndUpdate({
	// 		text: 'Eat launch'
	// },{
	// 	$set: {
	// 		completed: 'true'
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then( (res) => {
	// 	console.log(res)
	// })

	db.collection('User').findOneAndUpdate({
		_id: 123
	},{
		$set: {
			name: 'Qiu ZengYuan'
		},
		$inc: {
			age:1
		}
	},{
		returnOriginal: false
	}).then( (res) => {
		console.log(res)
	})
	db.close();
});