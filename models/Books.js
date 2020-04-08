const { model, Schema } = require('mongoose')

module.exports = model('books', new Schema({
  title: String,
  authors: [{
    type: String
  }],
  description: String,
  infoLink: String,
  imageLinks: Object
}))
