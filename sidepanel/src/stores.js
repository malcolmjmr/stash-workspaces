import { writable } from "svelte/store";



export const allWorkspaces = writable([]);
export const lastWorkspaceUpdate = writable(null);
export const openGroups = writable({});
export const openTabs = writable([]);
export const allResources = writable({});

export const settings = writable({});

export const userData = writable(null);

export const quickActions = writable([]);

//export const activeTab = writable(null);
