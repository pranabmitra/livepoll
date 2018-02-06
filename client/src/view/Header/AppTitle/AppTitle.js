import React from 'react'
import {Link} from 'react-router-dom';

import './AppTitle.css';
import {ROUTES} from "../../../constants/routing";

const AppTitle = (props) => (
    <Link className={`app-title app-title-resp fl ${props.className}`}
          to={ROUTES.HOME}>
        livepoll
    </Link>
)

export default AppTitle