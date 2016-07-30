import React from 'react';
import {Link, IndexLink} from 'react-router';

export default function Header() {
    return (
        <div>
            <IndexLink to="/">Pärs hemsida</IndexLink>
            <nav>
                <Link to="/about">About</Link>
            </nav>

        </div>
    );
}