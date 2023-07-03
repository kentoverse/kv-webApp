import { useMemo, useState } from "react"

interface Handlers {
    on: () => void;
    off: () => void;
    toggle: () => void;
  }
  


export function useToggle() {

    const [state, setState] = useState<boolean>();

    const handlers = useMemo (
        () => ({
            on: setState(true),
            off: setState(false),
            toggle: setState(!state),
        }),
     []
    );

    return [ state, handlers ];
}








