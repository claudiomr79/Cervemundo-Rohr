import React from 'react';
import { MutatingDots } from 'react-loader-spinner'
import { Container } from 'react-bootstrap'

const Loader = () => {
    return (<div>
                <Container className="m-3 p-5 d-flex flex-row justify-content-center">
                    <MutatingDots ariaLabel="loading-indicator" />
                    Loading
                </Container>
            </div>);
};

export default Loader