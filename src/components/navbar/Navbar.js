import React from 'react';
import { SearchBox } from '../gamesearch/SearchBox';
import './navbar.css';

export const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar">
                <section className="navbar__brand">
                    <h1>
                        9ijakids <span>Games</span>
                    </h1>
                </section>
                <section className="search__games">
                    <SearchBox />
                </section>
            </div>
        </React.Fragment>
    )
}
