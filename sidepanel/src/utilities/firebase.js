import { createId } from "./chrome";

export function createResource({url , favIconUrl, title}) {
    const now = Date.now();
    return {
        id: createId(),
        created: now,
        updated: now,
        url,
        title,
        favIconUrl,
    };
}