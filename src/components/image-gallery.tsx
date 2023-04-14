import { ReactPropTypes } from "react";
import Image from 'next/image';


export default function ImageGroup({
    props,
    children
}: {
    props: ReactPropTypes,
    children: React.ReactNode,
}) {

return (
<>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div className="grid gap-4">
            <div>
                <Image className="h-auto max-w-full rounded-lg" 
                    src="" 
                    alt="" 
                />
            </div>
            <div>
                <Image className="h-auto max-w-full rounded-lg" 
                    src="" 
                    alt="" 
                />
            </div>
            <div>
                <Image className="h-auto max-w-full rounded-lg" 
                    src="" 
                    alt="" 
                />
            </div>
        </div>
    </div>
</>
)
}

