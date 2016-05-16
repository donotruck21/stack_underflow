var mongoose = require('mongoose');



var UserSchema = new mongoose.Schema({
	name: String,
	topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'}]
});



var QuestionSchema = new mongoose.Schema({
	name: {type: String, required: true},
	title: {type: String, required: true},
	description: {type: String, required: true},
	category: {type: String, required: true}
	// topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'}]
});



var AnswerSchema = new mongoose.Schema({
	name: String,
	content: String,
	question: String,
	likes: Number,
	dislikes: Number,
	// topics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Topics'}]
});




mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);