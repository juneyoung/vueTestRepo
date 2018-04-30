var express = require('express');
var router = express.Router();
var data = require('../data/sample/movies.json');

router.get('/', (req, res, next) => {
	res.send(data);
});

router.get('/:id', (req, res, next) => {
	var id = parseInt(req.params.id, 10)
	var movie = data.filter(function (movie) {
		return movie.id === id
	});
	res.send(movie);
});

module.exports = router;