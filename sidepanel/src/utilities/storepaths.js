export class StorePaths {
    static users = 'users';
    static user(userId) { return this.users + '/' + userId; }
    static userTabs(userId) { return this.user(userId) + '/tabs'; }
    static userTab(userId, tabId) { return this.userTabs(userId) + '/' + tabId; }
    static userContexts(userId) { return this.user(userId) + '/contexts'; }
    static userContext(userId, contextId) { return this.userContexts(userId) + '/' + contextId; }
    static userResources(userId) { return this.user(userId) + '/resources'; }
    static userResource(userId, resourceId) { return this.userResources(userId) + '/' + resourceId; }
}