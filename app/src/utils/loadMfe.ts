import { lazy, LazyExoticComponent } from "react"

type ModuleType = {
    default: () => any
}

export default function loadMfe(importObj: Promise<ModuleType>): LazyExoticComponent<() => any> {
    return lazy(async () => {
        const mfe = await importObj;
        const Component = await mfe.default();
        return { default: () => Component };
    });
}