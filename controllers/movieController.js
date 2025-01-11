const connection = require('../data/db')


// Recupero la lista dei film
function index(req,res) {
    // recupero l'elenco dei miei film dal DB 

    const sql = `SELECT * FROM movies `

    connection.query(sql,(err, movies) => {
        if(err) return res.status(500).json({message: err.message})
        // console.log(movies);

        movies.forEach((movie) => {
            movie.image=`http://localhost:3000/movies_cover/${movie.image}`
        })

        res.json(movies)
    })
    
    // res.json({
    //     message: 'movies index'
    // })
}

// Recupero il film con id specifico e rispondo con un json contenente il film
function show(req,res) {

    const id = parseInt(req.params.id)
    
    const sql = `SELECT * FROM movies WHERE id = ?`
    
    connection.query(sql,[id], (err, results) => {
        if(err) return res.status(500).json({message: err.message})
        if(results.length === 0 ) return res.status(404).json({message: 'Movie not found'})
            
        const book = results[0]

        const sql = `SELECT * FROM reviews WHERE movie_id = ?`

        connection.query(sql, [id] ,(err, results) => {
            if(err) return res.status(500).json({message: err.message})
            
            book.reviews = results
            res.json(book)
        })
    })

}

module.exports = {index, show}