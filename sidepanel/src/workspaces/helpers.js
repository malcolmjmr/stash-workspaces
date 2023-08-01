export const getTimeSinceString = (date, minimized) => {

    if (!date) return '';
    let timeString = '';
    const now = Date.now();
    const timeSinceActive = now - date;
    const minutesInMilliseconds = 1000 * 60;
    const hourInMilliseconds = minutesInMilliseconds * 60;
    const dayInMilliseconds = hourInMilliseconds * 24;
    const weekInMilliseconds = dayInMilliseconds * 7;
    const withinTheMinute = timeSinceActive / minutesInMilliseconds < 1;
    const withinTheHour = timeSinceActive / hourInMilliseconds < 1;
    const withinTheDay = timeSinceActive / dayInMilliseconds < 1;
    const withinTheWeek = timeSinceActive / weekInMilliseconds < 1;

    if (withinTheMinute) {
        timeString = (timeSinceActive / 1000).toFixed(0) + (minimized ? "s ago" : " seconds ago");
    } else if (withinTheHour) {
        timeString =
            (timeSinceActive / (1000 * 60)).toFixed(0) + (minimized ? "m ago" : " minutes ago");
    } else if (withinTheDay) {
        timeString =
            (timeSinceActive / hourInMilliseconds).toFixed(0) + (minimized ? "h ago" :
                " hours ago");
    } else if (withinTheWeek) {
        timeString =
            (timeSinceActive / dayInMilliseconds).toFixed(0) + (minimized ? "w ago" : " days ago");
    } else if (typeof timeSinceActive == 'number') {
        timeString =
            (timeSinceActive / weekInMilliseconds).toFixed(0) +
            (minimized ? "w ago" : " weeks ago");
    } else {
        timeString = '';
    }
    return timeString;
};