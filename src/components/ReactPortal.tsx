import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';


const createWrapperAndAppendToBody = (wrapperId: string) => {
    if (!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
};


export function ReactPortal({
    wrapperId,
    children
}: {
    wrapperId: string,
    children: React.ReactElement,
}) {

    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId);

        }
        setWrapperElement(element!);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId]);

    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement);
}

