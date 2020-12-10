import React from 'react';
import { Row } from 'reactstrap';
import { ContentLeft, ContentRight } from '../components';

const HomePage = () => {
    return (
            <Row>
                <ContentLeft />
                <ContentRight />
            </Row>
    )
};

export default HomePage;