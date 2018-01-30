import React from 'react';

import './HeaderAuthBadge.css';
import SignInPopupButton from "../../AuthButtons/SignInPopupButton";

class HeaderAuthBadge extends React.Component {
    render() {
        return (
            <React.Fragment>
                {
                    false ? <div></div> : <SignInPopupButton className='fr'/>
                }
            </React.Fragment>
        )
    }
}

export default HeaderAuthBadge;