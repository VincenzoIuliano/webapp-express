// CREO UNA FUNZIONE PER GESTIRE LA PARTE BONUS DELLA PAGINA NOT FOUND

function notFound(req, res) {
    res.status(404).json({
        error: 'Not found',
        message: 'Pagina non trovata'
    })
}

module.exports = notFound