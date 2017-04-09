/**
 * Created by qzy on 09/04/2017.
 * File description:
 */
const mongoose = require('mongoose');
const User = mongoose.model('User', {
	email: {
		required: true,
		trim: true,
		type: String,
		minlength: 1
	},
});

module.exports = {User};