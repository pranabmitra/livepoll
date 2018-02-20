import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Content.css';
import {ROUTES} from "../../constants/routing";
import InvalidRouteSection from "./Sections/InvalidRouteSection/InvalidRouteSection";
import asyncComponent from "../shared-views/AsyncComponent";


const HomeSection = asyncComponent(()=>{
    return import('./Sections/HomeSection/HomeSection').then(module => module.default)
})

const ProfileSection = asyncComponent(()=>{
    return import('./Sections/ProfileSection/ProfileSection').then(module => module.default)
})

const MyPollsSection = asyncComponent(()=>{
    return import('./Sections/MyPollsSection/MyPollsSection').then(module => module.default)
})

const PollsVotedSection = asyncComponent(()=>{
    return import('./Sections/PollsVotedSection/PollsVotedSection').then(module => module.default)
})

const CreatePollForm = asyncComponent(()=>{
    return import('../shared-views/CreatePollForm/CreatePollForm').then(module => module.default)
})

const Content = () => (
    <div className='content content-resp'>
        <Switch>
            <Route exact path={ROUTES.HOME} component={HomeSection}/>
            <Route path={ROUTES.PROFILE} component={ProfileSection}/>
            <Route path={ROUTES.MY_POLLS} component={MyPollsSection}/>
            <Route path={ROUTES.POLLS_VOTED} component={PollsVotedSection}/>
            <Route path={ROUTES.CREATE_POLL} component={CreatePollForm}/>
            <Route component={InvalidRouteSection}/>
        </Switch>
    </div>
)

export default Content;