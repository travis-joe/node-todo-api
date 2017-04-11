/**
 * Created by qzy on 12/04/2017.
 * File description:
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {
//
// })

Todo.findOneAndRemove({_id:'58ed63edad62b802b2692da2'}).then((res) => {

})

Todo.findByIdAndRemove('58ed63edad62b802b2692da2').then((todo) => {
	console.log(todo)
})
