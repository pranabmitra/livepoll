import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Content.css';
import {ROUTES} from "../../constants/routing";


const UnsupportedSection = () => (
    <div style={{margin: 'auto', width: '100%', float: 'left'}}>
        Coming Soon...
    </div>
)

const Content = () => (
    <div className='content content-resp'>
        <Switch>
            <Route path={ROUTES.PROFILE} component={UnsupportedSection}/>
            <Route path={ROUTES.MY_POLLS} component={UnsupportedSection}/>
            <Route path={ROUTES.HOME} component={UnsupportedSection}/>
            <Route path={ROUTES.POLLS_VOTED} component={UnsupportedSection}/>
        </Switch>
    </div>
)

export default Content;