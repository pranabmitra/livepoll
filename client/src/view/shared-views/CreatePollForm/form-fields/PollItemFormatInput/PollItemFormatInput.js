import React from 'react'

import './PollItemFormatInput.css'
import EnhancedFormField from "../EnhancedFormField";
import LPButton from "../../../buttons/LPButton";

class PollItemFormatInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            freeStyleAllowed: false
        }

        this.onChangeFreeStyleInput = this.onChangeFreeStyleInput.bind(this);
    }

    onChangeFreeStyleInput(event){
        this.setState({
            freeStyleAllowed: event.target.checked
        })
    }

    render() {
        return (
            <EnhancedFormField className={this.props.className} title='Poll item structure' meta={this.props.meta}>
                <div className='w100p'>
                    <ul className='poll-item-format-menu'>
                        <li>
                            <input type='checkbox'
                                   checked={this.state.freeStyleAllowed}
                                   onChange={this.onChangeFreeStyleInput}/> freestyle
                        </li>
                        {
                            !this.state.freeStyleAllowed && (
                                <React.Fragment>
                                    <li>
                                        <LPButton>+paragraph</LPButton>
                                    </li>
                                    <li>
                                        <LPButton>+image</LPButton>
                                    </li>
                                    <li>
                                        <LPButton>+video</LPButton>
                                    </li>
                                </React.Fragment>
                            )
                        }
                    </ul>
                    <div className='poll-item-format-view'>

                    </div>
                </div>
            </EnhancedFormField>
        )
    }
}

export default PollItemFormatInput