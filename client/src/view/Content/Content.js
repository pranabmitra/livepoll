import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Content.css';
import {ROUTES} from "../../constants/routing";
import Modal from "../view-factories/popups/Modal";


const UnsupportedSection = () => (
    <div style={{margin: 'auto', width: '100%', float: 'left'}}>
        Coming Soon...
    </div>
)
const UnsupportedSection2 = () => (
    <div style={{margin: 'auto', width: '100%', float: 'left'}}>
        <Modal>Modal Test</Modal>
    </div>
)

const Content = () => (
    <div className='content content-resp'>
        <Switch>
            <Route path={ROUTES.PROFILE} component={UnsupportedSection}/>
            <Route path={ROUTES.MY_POLLS} component={UnsupportedSection2}/>
            <Route path={ROUTES.HOME} component={UnsupportedSection}/>
            <Route path={ROUTES.POLLS_VOTED} component={UnsupportedSection}/>
        </Switch>
    </div>
)

export default Content;