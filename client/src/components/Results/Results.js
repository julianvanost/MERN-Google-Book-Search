import React from 'react'
import {
    Card,
    CardBody,
    Container
} from 'reactstrap'


const Results = props => {
    return (
        <Container className="mt-4">
            <Card>
                <h4 className="m-2 text-muted">Results</h4>
                <CardBody>
                    {props.children}
                </CardBody>
            </Card>
        </Container>
    )
}

export default Results