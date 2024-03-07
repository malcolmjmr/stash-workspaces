import { writable } from "svelte/store";



export const _authLoaded = writable(null);
export const _workspacesLoaded = writable(null);
export const allWorkspaces = writable([]);
export const lastWorkspaceUpdate = writable(null);
export const openGroups = writable({});
export const _tabs = writable([]);
export const _groups = writable({});
export const _activeTab = writable(null);
export const _lastUpdatedTab = writable(null);
export const _openWorkspaces = writable({});
export const allResources = writable({});
export const _favorites = writable([]);

export const settings = writable({});

export const userData = writable(null);

export const quickActions = writable([]);

//export const activeTab = writable(null);
