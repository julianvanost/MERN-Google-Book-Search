import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
import {
    Container,
    Button,
    Form,
    Label,
    Input,
    Card,
    CardBody
} from 'reactstrap'

const SearchForm = () => {

    const { bookSearchInput, handleInputChange, handleInputSearch } = useContext(BookContext)

    return (
        <Container className="mt-2">
            <Card>
                <h4 className="m-2 text-muted">Book Search</h4>
                <CardBody>
                    <Form>
                        <p>
                            <Label for="bookSearchInput">Book</Label>
                            <Input
                                type="text"
                                name="bookSearchInput"
                                value={bookSearchInput}
                                id="bookSearch"
                                placeholder="Book Title"
                                onChange={handleInputChange}
                            />
                        </p>
                        <Button onClick={handleInputSearch} color="primary">Search</Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    )
}

export default SearchForm