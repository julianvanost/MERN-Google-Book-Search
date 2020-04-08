const router = require('express').Router()
const { Books } = require('../models')

router.get('/books', (req, res) => {
    Books.find()
        .then(books => res.json(books))
        .catch(e => console.error(e))
})

router.post('/books', (req, res) => {
    Books.create(req.body)
        .then(item => res.json(item))
        .catch(e => console.error(e))
})

router.put('/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

router.delete('/books/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

module.exports = router