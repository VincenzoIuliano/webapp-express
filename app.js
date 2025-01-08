const express = require('express');
const app = express();
const port = 3000;
const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')
const filmRouter = require('./routers/filmRouter')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('Server running')
})

// ROTTE 
app.use('/api/films', filmRouter)


// USO UN MIDDLEWARE PER GESTIRE GLI EVENTUALI ERRORI
app.use(errorsHandler)

// USO UN MIDDLEWARE PER GESTIRE LA SITUAZIONE PAGE NOT FOUND 
app.use(notFound)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
})