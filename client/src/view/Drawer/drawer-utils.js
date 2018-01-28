export const openDrawer = () => {
    const drawerElem = document.querySelector('#app-drawer');
    if (drawerElem.classList.contains('drawer-opened')) return;

    drawerElem.classList.remove('drawer-closed');
    drawerElem.classList.remove('drawer-closed-resp');
    drawerElem.classList.add('drawer-opened');
    drawerElem.classList.add('drawer-opened-resp');
}

export const closeDrawer = () => {
    const drawerElem = document.querySelector('#app-drawer');
    if (drawerElem.classList.contains('drawer-closed')) return;

    drawerElem.classList.remove('drawer-opened');
    drawerElem.classList.remove('drawer-opened-resp');
    drawerElem.classList.add('drawer-closed');
    drawerElem.classList.add('drawer-closed-resp');
}

export const toggleDrawer = () => {
    const drawerElem = document.querySelector('#app-drawer');
    if (drawerElem.classList.contains('drawer-opened')) {
        closeDrawer();
    } else {
        openDrawer();
    }
}