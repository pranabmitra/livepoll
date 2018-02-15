import {LP_SETTING_VALUES} from "../../../constants/lp-settings";

const defaultPollSettings = {
    voteSettings: {
        howToVote: LP_SETTING_VALUES.HOW_TO_VOTE.TICK,
        multipleVotesAllowed: false,
        voteSchedule: {
            voteStartsOn: {
                date: null,
                time: null
            },
            voteEndsOn: {
                date: null,
                time: null
            }
        },
    },
    pollSettings: {
        whoCanAdd: LP_SETTING_VALUES.WHO_CAN_ADD.ALL,
        whenCanAdd: LP_SETTING_VALUES.WHEN_CAN_ADD.RUNTIME,
        title: null,
        pollItemFormat: [],
        howManyCanPeopleAdd: 1
    }
}

export default defaultPollSettings