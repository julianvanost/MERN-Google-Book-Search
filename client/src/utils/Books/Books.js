import axios from 'axios'

const Book = {
  read: () => axios.get('/api/books'),
  create: books => axios.post('/api/books', books),
  delete: id => axios.delete(`/api/books/${id}`)
}

export default Book