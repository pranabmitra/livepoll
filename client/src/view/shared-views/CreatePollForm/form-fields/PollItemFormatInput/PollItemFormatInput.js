import React from 'react'

import './PollItemFormatInput.css'
import EnhancedFormField from "../EnhancedFormField";
import LPButton from "../../../buttons/LPButton";
import {LP_SETTING_VALUES} from "../../../../../control/livepoll/default-poll-settings";

class PollItemFormatInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            freeStyleAllowed: false
        }

        this.onChangeFreeStyleInput = this.onChangeFreeStyleInput.bind(this);
        this.addAVideoSpace = this.addAVideoSpace.bind(this);
        this.addAParagraphSpace = this.addAParagraphSpace.bind(this);
        this.addAImageSpace = this.addAImageSpace.bind(this);
    }

    onChangeFreeStyleInput(event){
        this.setState({
            freeStyleAllowed: event.target.checked
        })
    }

    addAParagraphSpace() {
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.PARAGRAPH)
        );
    }

    addAImageSpace() {
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.IMAGE)
        );
    }

    addAVideoSpace() {
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.YOUTUBE_VIDEO)
        );
    }

    render() {
        return (
            <EnhancedFormField className={this.props.className} title='Poll item structure' meta={this.props.meta}>
                <div className='w100p'>
                    <ul className='poll-item-format-menu no-pad'>
                        <li>
                            <input type='checkbox'
                                   checked={this.state.freeStyleAllowed}
                                   onChange={this.onChangeFreeStyleInput}/> freestyle
                        </li>
                        {
                            !this.state.freeStyleAllowed && (
                                <React.Fragment>
                                    <li>
                                        <LPButton onClick={this.addAParagraphSpace}>+paragraph</LPButton>
                                    </li>
                                    <li>
                                        <LPButton onClick={this.addAImageSpace}>+image</LPButton>
                                    </li>
                                    <li>
                                        <LPButton onClick={this.addAVideoSpace}>+video</LPButton>
                                    </li>
                                </React.Fragment>
                            )
                        }
                    </ul>
                    <div className='poll-item-format-view'>
                        {
                            JSON.stringify(this.props.input.value.toJS())
                        }
                    </div>
                </div>
            </EnhancedFormField>
        )
    }
}

export default PollItemFormatInput