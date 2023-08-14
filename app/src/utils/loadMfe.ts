import { lazy, LazyExoticComponent } from "react"

type ModuleType = {
    default: () => any
}

export default function loadMfe(importObj: Promise<ModuleType>): LazyExoticComponent<() => any> {
    let def, Component;
    const laz = lazy(async () => {
        const mfe = await importObj;
        def = mfe.default;
        Component = await def();
        return { default: () => Component };
    });
    laz.refresh = async () => {
        if (def) {
            Component = await def();
        }
    }
    return laz;
}