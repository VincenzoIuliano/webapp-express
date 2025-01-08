const connection = require('../data/db')

// Recupero la lista dei film
function index(req,res) {
    res.json({
        message: 'films index'
    })
}

// Recupero il film con id specifico e rispondo con un json contenente il film
function show(req,res) {
    res.json({
        message: 'films show'
    })
}

module.exports = {index, show}