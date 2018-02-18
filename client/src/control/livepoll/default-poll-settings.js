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
        ONLY_CREATOR: 'OC'
    },
    WHEN_CAN_ADD_ITEM: {
        BEFORE_START: 'BS',
        ANYTIME: 'RT'
    },
    POLL_ITEM_CONTENT_TYPES: {
        IMAGE: 'image',
        YOUTUBE_VIDEO: 'youtube video',
        PARAGRAPH: 'paragraph',
        TITLE: 'Title'
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
    whenCanAdd: LP_SETTING_VALUES.WHEN_CAN_ADD_ITEM.ANYTIME,
    title: undefined,
    pollItemFormat: [LP_SETTING_VALUES.POLL_ITEM_CONTENT_TYPES.TITLE],
    howManyCanPeopleAdd: 1
}