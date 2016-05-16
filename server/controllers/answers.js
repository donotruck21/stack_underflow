var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = (function() {
	return {
		create: function(req, res) {
			console.log("in backend controller, creating", req.body)

			var answer = new Answer({name: req.body.name, content: req.body.content, question: req.body.question, likes: 0, dislikes: 0})

			answer.save(function(err){
				if(err){
		    		console.log("something went wrong")
		    		console.log(err)
		    	}
		    	else{
		    		console.log("added a answer!")
					res.json(answer);
		    	}
			})
		},

		getAll: function(req, res) {
			console.log('in controller:', req.params.id)

			Question.findOne({_id: req.params.id}, function(err, result){
				console.log(result)
				var question = result.title
				console.log('found question:', question)
				Answer.find({question: question}, function(err, answers) {
					// console.log('found:', answers)
					if(err){
			    		console.log("something went wrong")
			    		console.log(err)
			    	}
			    	else{
			    		console.log("found all answer!")
						res.json(answers);
			    	}
				})
			})
		},

		addLike: function(req, res) {
			console.log('adding like for:', req.params.id)

			Answer.findOne({_id: req.params.id}, function(err, answer){
				console.log(answer)
				answer.likes ++
				answer.save()
				console.log(answer)
				res.json(answer)
			})
		},

		addDislike: function(req, res) {
			console.log('adding dislike for:', req.params.id)

			Answer.findOne({_id: req.params.id}, function(err, answer){
				console.log(answer)
				answer.dislikes ++
				answer.save()
				console.log(answer)
				res.json(answer)
			})
		},

		getByUser: function(req, res) {
			console.log('getting questions for:', req.params.name)

			Answer.find({name: req.params.name}, function(err, answer){
				console.log(answer.length)
				res.json(answer.length)
			})
		}
	}
})();










