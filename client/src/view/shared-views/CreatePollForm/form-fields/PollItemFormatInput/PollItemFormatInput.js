import React from 'react'

import './PollItemFormatInput.css'
import EnhancedFormField from "../EnhancedFormField/EnhancedFormField";
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
        this.undoAdd = this.undoAdd.bind(this);
    }

    onChangeFreeStyleInput(event){
        this.setState({
            freeStyleAllowed: event.target.checked
        })
        this.props.input.onChange(
            this.props.input.value.clear()
                .push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.TITLE)
        );
    }

    addAParagraphSpace(event) {
        event.preventDefault();
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.PARAGRAPH)
        );
    }

    addAImageSpace(event) {
        event.preventDefault();
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.IMAGE)
        );
    }

    addAVideoSpace(event) {
        event.preventDefault();
        this.props.input.onChange(
            this.props.input.value.push(LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.YOUTUBE_VIDEO)
        );
    }

    undoAdd(event) {
        event.preventDefault();
        this.props.input.onChange(
            this.props.input.value.pop()
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
                            !this.state.freeStyleAllowed && this.props.input.value.size <= 5 && (
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
                        {
                            !this.state.freeStyleAllowed && this.props.input.value.size > 1 && (
                                <li>
                                    <LPButton btnClass='item-format-input-undo'
                                              onClick={this.undoAdd}>-undo</LPButton>
                                </li>
                            )
                        }
                    </ul>
                    <div className='poll-item-format-view'>
                        {
                            this.props.input.value.toJS().map((contentType, index) => (
                                <div key={index} className='poll-item-content-type'>
                                    {contentType}
                                </div>
                            ))
                        }
                        {
                            this.state.freeStyleAllowed && (
                                <div className='poll-item-content-type'>
                                    anything can be added
                                </div>
                            )
                        }
                    </div>
                </div>
            </EnhancedFormField>
        )
    }
}

export default PollItemFormatInput