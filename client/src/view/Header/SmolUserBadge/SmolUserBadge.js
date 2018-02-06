import React from 'react'

import './SmolUserBadge.css'
import LPLinkButton from "../../shared-views/buttons/LPLinkButton";
import {ROUTES} from "../../../constants/routing";

const SmolUserBadge = props => (
    <LPLinkButton
        btnClass='smol-user-badge'
        btnIconClass='smol-user-badge-icon'
        btnTextClass='smol-user-badge-txt smol-user-badge-txt-resp'
        href={ROUTES.PROFILE}
        iconUrl={props.user.getProfileImage()}>
        {props.user.getFullName()}
    </LPLinkButton>
)

export default SmolUserBadge