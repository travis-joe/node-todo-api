/**
 * Created by qzy on 09/04/2017.
 * File description:
 */
const express = require('express');
const bodyParse = require('body-parser');
const { ObjectID } =require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const port = process.env.PORT || 3000;
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

app.get('/todos/:id',(req,res) => {
	const id = req.params.id;

  if(!ObjectID.isValid(id)) {
  	return res.status(404).send('invalid');
  }

  Todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
  }).catch((e) => {
  	res.status(404).send(e);
  })
})

app.delete('/todos/:id',(req,res) => {
	const id = req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send('invalid id');
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			return res.status(404).send('not found')
		}
		res.send(todo)
	}).catch( (e) => {
		res.status(400).send()
	})
})

app.listen(port, () => {
	console.log(`started on port ${port}`)
})

module.exports = {app}