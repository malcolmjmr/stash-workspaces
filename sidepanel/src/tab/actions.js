export const actions = [
    {
        title: 'Save',
    },
    {
        title: 'Stash'
    },
    {
        divider: true,
    },
    {
        title: 'Pin',
        condition: (tabs) => tabs.length == 1 && tabs[0].active
    },
    {
        title: 'Reload',
        condition: (tabs) => tabs.length == 1 && tabs[0].active
    },
    {
        title: 'Duplicate',
        condition: (tabs) => tabs.length == 1 && tabs[0].active
    },
    {
        title: 'Mute',
        condition: (tabs) => tabs.length == 1 && tabs[0].active
    },
    {
        divider: true,
    },
    {
        title: 'Close Tab',
        condition: (tabs) => tabs.length == 1,
    },
    {
        title: 'Close Group',
        condition: (tabs) => tabs.length == 1 && tabs.groupId > -1,
    },
    {
        divider: true,
    },
    {
        title: 'Move out of Group'
    },
    {
        title: 'Move to New Window',
    },
    {
        title: 'Move Group to New Window',
        condition: (tab) => tab.groupId > -1,
    },



]