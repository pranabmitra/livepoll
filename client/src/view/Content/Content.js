import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Content.css';
import {ROUTES} from "../../constants/routing";
import CreatePollForm from "../shared-views/CreatePollForm/CreatePollForm";
import HomeSection from "./Sections/HomeSection/HomeSection";
import ProfileSection from "./Sections/ProfileSection/ProfileSection";
import InvalidRouteSection from "./Sections/InvalidRouteSection/InvalidRouteSection";
import MyPollsSection from "./Sections/MyPollsSection/MyPollsSection";
import PollsVotedSection from "./Sections/PollsVotedSection/PollsVotedSection";


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