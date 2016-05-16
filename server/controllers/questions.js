var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function() {
	return {
		getAll: function(req, res) {
			Question.find({}, function(err, questions) {
				if(err){
					console.log("errors:", err);
				} else {
					res.json(questions);
				}
			})
		},

		getOne: function(req, res) {
			Question.find({_id:req.params.id}, function(err, question) {
				if(err){
					console.log("errors:", err);
				} else {
					console.log('got question!')
					res.json(question);
				}
			})
		},

		create: function(req, res) {
			console.log("in backend controller, creating", req.body)

			var question = new Question({name: req.body.name, title: req.body.title, description: req.body.description, category: req.body.category})

			question.save(function(err){
				if(err){
		    		console.log("something went wrong")
		    		console.log(err)
		    		res.json(err);
		    	}
		    	else{
		    		console.log("added a question!")
					res.json(question);
		    	}
			})
		},

		getByUser: function(req, res) {
			console.log('getting questions for:', req.params.name)

			Question.find({name: req.params.name}, function(err, question){
				console.log(question.length)
				res.json(question.length)
			})
		}
	}
})();


