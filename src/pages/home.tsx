import React, { useEffect } from 'react';
import logging from '../config/logging';
import IPage from '../interface/page';

const HomePage: React.FunctionComponent<IPage> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props])
    return <p>This is the homepage.</p>
};

export default HomePage;