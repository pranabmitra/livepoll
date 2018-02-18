import {LP_SETTING_VALUES} from "../../../control/livepoll/default-poll-settings";

const validateVoteSchedule = voteSchedule => {
    if (!voteSchedule) return 'please fill up everything'

    let startDate = voteSchedule.getIn(['voteStartsOn', 'date']),
        startTime = voteSchedule.getIn(['voteStartsOn', 'time']),
        endDate = voteSchedule.getIn(['voteEndsOn', 'date']),
        endTime = voteSchedule.getIn(['voteEndsOn', 'time']);

    if (!startDate || !startTime || !endDate || !endTime) return 'please fill up everything'

    let startDateTime = new Date(startDate + ' ' + startTime),
        endDateTime = new Date(endDate + ' ' + endTime);

    if (endDateTime < startDateTime) return 'time travel is not possible'
    if (endDateTime - startDateTime < 7200000) return 'duration should be at least 2 hours';
}

const validateTitle = title => {
    if (!title) return 'Poll must have a title';
}

const validateHowToVote = howToVote => {
    if (howToVote.get('method') === LP_SETTING_VALUES.HOW_TO_VOTE.NUMBER.method) {
        let min = howToVote.get('min'),
            max = howToVote.get('max');
        if (min < 1)
            return 'min must be greater than 0'

        if (max > 100)
            return 'max must not exceed 100'

        if (min >= max)
            return 'min must be smaller than max';

        if (max - min < 9)
            return 'min must be smaller than max by at least 9';
    }
}

const validateHowManyCanPeopleAdd = amount => {
    if (amount > 10)
        return 'sorry, the limit is 10'
}

const validateCreatePollForm = values => {
    return {
        title: validateTitle(values.get('title')),
        voteSchedule: validateVoteSchedule(values.get('voteSchedule')),
        howToVote: validateHowToVote(values.get('howToVote')),
        howManyCanPeopleAdd: validateHowManyCanPeopleAdd(values.get('howManyCanPeopleAdd')),
    }
}

export default validateCreatePollForm;