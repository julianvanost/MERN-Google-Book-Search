import React, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'
import BookContext from '../../utils/BookContext'
import Book from '../../utils/Books'

const SavedResultCard = () => {

    const { handleDeleteBook } = useContext(BookContext)

    const [bookState, setBookState] = useState({
        books: []
      })

    useEffect(() => {
        Book.read()
            .then(({ data: savedBooks }) => {
              let savedBooksObj = savedBooks.map(obj => obj)
              setBookState({
                ...bookState,
                books: savedBooksObj
              })
            })
            .catch(e => console.error(e))
    })

    return (
        <>
            {
                bookState.books.map((savedBooks, i) =>
                    <Card key={i} className="m-2">
                        <div className="m-2">
                            <div className="clear-fix">
                                <div className="float-left">
                                    <CardTitle>{savedBooks.title}</CardTitle>
                                    <p>Written by: {savedBooks.authors}</p>
                                </div>
                                <div className="float-right">
                                    <Button href={savedBooks.infoLink} className="mr-1" color="primary">View</Button>
                                    <Button color="danger" onClick={() => handleDeleteBook(savedBooks._id)}>Delete</Button>
                                </div>
                            </div>
                        </div>
                        <div className="clear-fix m-2">
                            <CardImg className="w-25 float-left mr-2" src={savedBooks.imageLinks ? savedBooks.imageLinks.smallThumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqmAdSezHVo2CHjJhKLul2Hr1jTiencptU_5aVrbTPBeFqt418'} alt={savedBooks.title} />
                            <CardText>{savedBooks.description}</CardText>
                        </div>
                    </Card>
                )
            }
        </>
    )
}

export default SavedResultCard