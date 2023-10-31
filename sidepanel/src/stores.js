import { writable } from "svelte/store";

export const allWorkspaces = writable([]);
export const openGroups = writable({});
export const openTabs = writable([]);
export const allResources = writable({});

export const settings = writable({});

export const userData = writable({});

//export const activeTab = writable(null);
