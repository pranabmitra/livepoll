export const LP_SETTING_VALUES = {
    HOW_TO_VOTE: {
        TICK: {
            method: 'TICK'
        },
        NUMBER: {
            method: 'NUMBER',
            min: 1,
            max: 100
        }
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
            date: undefined,
            time: undefined
        },
        voteEndsOn: {
            date: undefined,
            time: undefined
        }
    },
    whoCanAdd: LP_SETTING_VALUES.WHO_CAN_ADD_ITEM.ALL,
    whenCanAdd: LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.AT_RUNTIME,
    title: undefined,
    pollItemFormat: [],
    howManyCanPeopleAdd: 1
}