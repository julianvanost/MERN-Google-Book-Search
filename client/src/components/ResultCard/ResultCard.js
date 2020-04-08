import React, { useContext } from 'react'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'
import BookContext from '../../utils/BookContext'

const ResultCard = () => {

    const { searchedBooks, handleSaveBook } = useContext(BookContext)

    return (
        <>
            {
                searchedBooks.map((searchedBooks, i) =>
                    <Card key={i} className="m-2">
                        <div className="m-2">
                            <div className="clear-fix">
                                <div className="float-left">
                                    <CardTitle>{searchedBooks.title}</CardTitle>
                                    <p>Written by: {searchedBooks.authors}</p>
                                </div>
                                <div className="float-right">
                                    <Button href={searchedBooks.infoLink} className="mr-1" color="primary">View</Button>
                                    <Button color="success" href="/saved" onClick={() => handleSaveBook(i)}>Save</Button>
                                </div>
                            </div>
                        </div>
                        <div className="clear-fix m-2">
                            <CardImg className="w-25 float-left mr-2" src={searchedBooks.imageLinks ? searchedBooks.imageLinks.smallThumbnail : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqmAdSezHVo2CHjJhKLul2Hr1jTiencptU_5aVrbTPBeFqt418'} alt={searchedBooks.title} />
                            <CardText>{searchedBooks.description}</CardText>
                        </div>
                    </Card>
                )
            }
        </>
    )
}

export default ResultCard