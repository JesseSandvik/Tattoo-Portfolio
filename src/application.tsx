import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import LandingPage from './components/landing';
import routes from './config/routes';

const Application: React.FC<{}> = props => {


    return (
        <div className="app">
            <BrowserRouter>
            <LandingPage />
                <Header />
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props} 
                                    />
                                )}
                            />
                        )
                    })}
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Application;