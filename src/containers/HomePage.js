import React from 'react';
import { Row, Container } from 'reactstrap';
import { ContentLeft } from '../components/Left';
import { ContentRight } from '../components/Right';

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