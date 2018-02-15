export const LP_SETTING_VALUES = {
    HOW_TO_VOTE: {
        TICK: 'TICK',
        NUMBER: 'NUMBER'
    },
    WHO_CAN_ADD_ITEM: {
        ALL: 'ALL',
        ONLY_ADMIN: 'OA'
    },
    WHEN_CAN_ADD_ITEM: {
        BEFORE_START: 'BS',
        AT_RUNTIME: 'RT'
    },
    POLL_ITEM_CONTENT_TYPES: {
        IMAGE: 'I',
        YOUTUBE_VIDEO: 'V',
        PARAGRAPH: 'P',
        TITLE: 'T'
    }
}


export const defaultPollSettings = {
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
    whoCanAdd: LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ALL,
    whenCanAdd: LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.RUNTIME,
    title: null,
    pollItemFormat: [],
    howManyCanPeopleAdd: 1
}