var express = require('express');
var router = express.Router();
//add constant to require mysql database
const mysql = require('mysql');

//add code to connect to mySQL database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!',
    database: 'sakila'
  });

/* GET home page. */
router.get('/film', function(req, res, next) {
  let filmQuery = `SELECT * FROM film`;

//add query for film search
connection.query(filmQuery, function(err, result) {
    if (err) {
      console.log(err);
      res.render('error', { message: err.message });
    } else {
      res.render('film.hbs', { films: result });
    }
  });
});

//add a new get() method for '/film:id' and filmActorQuery
router.get('/film/:id', function(req, res, next) {
  let filmId = parseInt(req.params.id);
  let filmActorQuery = `
    SELECT film.title, actor.first_name, actor.last_name
    FROM film INNER JOIN film_actor ON film.film_id = film_actor.film_id
    INNER JOIN actor ON film_actor.actor_id = actor.actor_id
    WHERE film.film_id = ${filmId}
  `;

//add query for film actor
  connection.query(filmActorQuery, function(err, result) {
    if (err) {
      res.render('error', { message: err.message });
    } else {
      console.log(result);
      res.render('filmDetails', {
        filmTitle: result[0].title, //Only need the title of the first record
        films: result
      });
    }
  });

});

module.exports = router;
