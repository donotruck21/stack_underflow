var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app) {

	// -- USER ROUTES

	app.post('/users', function(req, res) {
		users.create(req, res)
	})

	// -- QUESTION ROUTES

	app.get('/questions', function(req, res) {
		questions.getAll(req, res)
	})

	app.get('/questions/:id', function(req, res) {
		questions.getOne(req, res)
	})

	app.post('/questions', function(req, res) {
		questions.create(req, res)
	})

	app.get('/questions/user/:name', function(req, res) {
		questions.getByUser(req, res)
	})

	// -- ANSWER ROUTES

	app.get('/answers/:id', function(req, res) {
		answers.getAll(req, res)
	})

	app.post('/answers', function(req, res) {
		answers.create(req, res)
	})

	app.post('/answers/like/:id', function(req, res) {
		answers.addLike(req, res)
	})

	app.post('/answers/dislike/:id', function(req, res) {
		answers.addDislike(req, res)
	})

	app.get('/answers/user/:name', function(req, res) {
		answers.getByUser(req, res)
	})
}




