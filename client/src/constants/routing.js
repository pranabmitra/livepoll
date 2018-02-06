export const ROUTES = {
    HOME: '/',
    PROFILE: '/profile',
    MY_POLLS: '/mypolls',
    POLLS_VOTED: '/voted',
    CREATE_POLL: '/create'
}

export const NAV_BUTTONS_DATA = [
    {
        TITLE: 'Home',
        HREF: ROUTES.HOME,
        ICON_URL: '/images/icons/nav-home.png'
    },
    {
        TITLE: 'My Polls',
        HREF: ROUTES.MY_POLLS,
        ICON_URL: '/images/icons/nav-my-polls.png'
    },
    {
        TITLE: 'Polls Voted',
        HREF: ROUTES.POLLS_VOTED,
        ICON_URL: '/images/icons/nav-polls-voted.png'
    },
    {
        TITLE: 'Create Poll',
        ICON_URL: '/images/icons/nav-create-poll.png',
        HREF: ROUTES.CREATE_POLL
    },
];