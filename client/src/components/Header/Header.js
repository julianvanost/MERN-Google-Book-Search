import React from 'react'
import { Jumbotron, Container } from 'reactstrap'

const Header = () => {
    return (
        <Container className="mt-4">
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 text-center">Google Book Search!</h1>
                    <p className="lead text-center">Search for books using Google</p>
                </Container>
            </Jumbotron>
        </Container>
    )
}

export default Header