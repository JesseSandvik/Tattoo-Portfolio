import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FunctionComponent = () => {
    const navigationLinks = {
        homeActive: true,
        aboutActive: false,
        projectsActive: false,
        contactActive: false,
    };

    const [navigationLinkActive, setNavigationLinkActive] = useState(navigationLinks);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            activeClassName="link-active"
                            onClick={() => setNavigationLinkActive({
                                homeActive: true,
                                aboutActive: false,
                                projectsActive: false,
                                contactActive: false,
                            })}
                            exact={true}
                            to="/"
                            >
                            {navigationLinkActive.homeActive && <i className="fas fa-moon"></i>}
                            <div>Home</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeClassName="link-active"
                            onClick={() => setNavigationLinkActive({
                                homeActive: false,
                                aboutActive: true,
                                projectsActive: false,
                                contactActive: false,
                            })}
                            to="/about"
                            >
                            {navigationLinkActive.aboutActive && <i className="fas fa-moon"></i>}
                            <div>About The Artist</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        activeClassName="link-active"
                        onClick={() => setNavigationLinkActive({
                            homeActive: false,
                            aboutActive: false,
                            projectsActive: true,
                            contactActive: false,
                        })}
                        to="/portfolio"
                        >
                        {navigationLinkActive.projectsActive && <i className="fas fa-moon"></i>}
                        <div>Portfolio</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        activeClassName="link-active"
                        onClick={() => setNavigationLinkActive({
                            homeActive: false,
                            aboutActive: false,
                            projectsActive: false,
                            contactActive: true,
                        })}
                        to="/contact"
                        >
                        {navigationLinkActive.contactActive && <i className="fas fa-moon"></i>}
                        <div>Contact</div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;