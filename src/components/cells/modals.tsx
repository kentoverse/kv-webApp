import React, { useEffect } from "react";
import { ReactPortal } from "@components/ReactPortal";

interface ModalProps {
    children: React.ReactNode | React.ReactElement,
    isOPen: boolean,
    handleClose: () => void;

}

export function Modal({
    children,
    isOPen,
    handleClose,
}: ModalProps) {

    // close modal on escape key
    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === 'Escape' ? handleClose() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);
        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [handleClose]);

    // disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOPen]);

    if (isOPen) return null;

    return (
        <ReactPortal wrapperId={`react-portal-modal-container`}>
            <>
            <div className={'fixed top-0 left-0 w-screen h-screen z-100 bg-neutral-800 opacity-70'} />
                <div className={`fixed rounded flex flex-col box-border min-w-fit overlfow-hidden p-5 bg-zinc-300 inset-y-32 inset-x-24`}>
                    <button className={`
                        text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover
                        justify-center w-20 px-5 py-3 border border-transparent
                        text-base font-bold font-mono rounded-sm shadow-lg self-center`}
                        type='button'
                        onClick={handleClose}>
                        Close
                    </button>
                    <div className={`box-border h-5/6`}>{children}</div>
                </div>
            </>
        </ReactPortal>
    )

}





