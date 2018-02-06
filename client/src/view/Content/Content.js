import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Content.css';
import {ROUTES} from "../../constants/routing";
import CreatePollForm from "../shared-views/CreatePollForm/CreatePollForm";


const UnsupportedSection = () => (
    <div style={{margin: 'auto', width: '100%', float: 'left'}}>
        Coming Soon...
    </div>
)

const Content = () => (
    <div className='content content-resp'>
        <Switch>
            <Route exact path={ROUTES.HOME} component={UnsupportedSection}/>
            <Route path={ROUTES.PROFILE} component={UnsupportedSection}/>
            <Route path={ROUTES.MY_POLLS} component={UnsupportedSection}/>
            <Route path={ROUTES.POLLS_VOTED} component={UnsupportedSection}/>
            <Route path={ROUTES.CREATE_POLL} component={CreatePollForm}/>
            <Route component={_=><div>invalid route</div>}/>
        </Switch>
    </div>
)

export default Content;