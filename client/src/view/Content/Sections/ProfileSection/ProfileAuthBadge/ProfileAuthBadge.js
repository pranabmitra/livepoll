import React from 'react'

import './ProfileAuthBadge.css'

const ProfileAuthBadge = props => (
    <div className='prof-auth-badge'>
        <div className='prof-auth-badge-img prof-auth-badge-img-resp'
             style={{backgroundImage: `url(${props.user.getProfileImage()})`}}></div>

        <div className='prof-auth-badge-name prof-auth-badge-name-resp'>{props.user.getFullName()}</div>
    </div>
)

export default ProfileAuthBadge;