import { createId } from "./chrome";

export function createResource(props) {
    const now = Date.now();
    let resource = {
        id: createId(),
        created: now,
        updated: now,
    };
    return {
        ...resource,
        ...props,
    };
}