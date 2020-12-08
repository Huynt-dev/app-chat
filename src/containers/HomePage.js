import React from 'react';
import { Row, Container } from 'reactstrap';
import { ContentLeft, ContentRight } from '../components';

const HomePage = () => {
    return (
        <Container>
            <Row>
                <ContentLeft />
                <ContentRight />
            </Row>
        </Container>
        
    )
};

export default HomePage;