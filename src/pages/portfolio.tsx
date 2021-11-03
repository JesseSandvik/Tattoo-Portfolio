import React, { useEffect } from 'react';
import logging from '../config/logging';
import IPage from '../interface/page';

const PortfolioPage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props])
    return (
        <main>
            <h1>Miss Tattoo Tara</h1>
        </main>
    );
};

export default PortfolioPage;