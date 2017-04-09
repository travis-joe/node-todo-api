/**
 * Created by qzy on 09/04/2017.
 * File description:
 */
const express = require('express');
const bodyParse = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo')
const {User} = require('./models/user')


// const newTodo = new Todo({
// 	text: 'feed cat',
// 	completed:false,
// });
//
// newTodo.save().then((doc) => {
// 	console.log(`saved todo ${doc}`)
// }, (e) => {
// 	console.log('unable to save todo')
// });
//
//
//
// const newUser = new User({
// 	email: 'weelgod@gmail.com'
// })
// newUser.save().then( (doc) => {
// 	console.log(doc)
// }, (e) => {
// 	console.log('unable to save todo')
// })

const app = express()
app.use(bodyParse.json());

app.post('/todos',(req,res) => {
	const todo = new Todo({
		text: req.body.text
	})

	todo.save().then( (doc) => {
		res.send(doc)
	}, (e) => {
		res.status(400).send(e)
	})
})

app.get('/todos',(req,res) => {
	Todo.find().then( (todos)=>{
		res.send({
			todos,
		})
	}, (e)=>{
		res.status(400).send(e)
	})
})

app.listen(3000, () => {
	console.log('started on port 3000')
})

module.exports = {app}