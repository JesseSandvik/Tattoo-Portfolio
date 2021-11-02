import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import IPage from '../interface/page';
import logging from '../config/logging';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
        
        let number = props.match.params.number;

        if (number) {
            setMessage(`The number is ${number}`);
        } else {
            setMessage(`No number provided!`);
        }
    }, [props])
    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go To The Home Page!</Link>
        </div>
    );
};

export default withRouter(AboutPage);