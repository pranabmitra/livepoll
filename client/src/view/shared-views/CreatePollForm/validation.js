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
const validateCreatePollForm = values => {
    return {
        title: validateTitle(values.get('title')),
        voteSchedule: validateVoteSchedule(values.get('voteSchedule'))
    }
}

export default validateCreatePollForm;