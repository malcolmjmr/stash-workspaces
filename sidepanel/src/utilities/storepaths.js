export class StorePaths {
    static users = 'users';
    static user(userId) { return this.users + '/' + userId; }
    static userTabs(userId) { return this.user(userId) + '/tabs'; }
    static userTab(userId, tabId) { return this.userTabs(userId) + '/' + tabId; }
    static userWindows(userId) { return this.user(userId) + '/windows'; }
    static userWindow(userId, windowId) { return this.userWindows(userId) + '/' + windowId; }
    static userContexts(userId) { return this.user(userId) + '/contexts'; }
    static userContext(userId, contextId) { return this.userContexts(userId) + '/' + contextId; }
    static userResources(userId) { return this.user(userId) + '/resources'; }
    static userResource(userId, resourceId) { return this.userResources(userId) + '/' + resourceId; }
    static userDevices(userId) { return this.user(userId) + '/devices'}
    static userDevice(userId, deviceId) { return this.userDevices(userId) + '/' + deviceId; }
    static userPrompts(userId) { return this.user(userId) + '/prompts'}
    static userPrompt(userId, promptId) { return this.userPrompts(userId) + '/' + promptId; }
}