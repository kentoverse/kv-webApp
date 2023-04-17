import { ReactPropTypes, FC } from "react"



export default function _Copy ({ 
  props, 
  children
}:{  props : ReactPropTypes, 
  children : React.ReactNode,
}){

return (
<>
      
       {children} 
</>)
}


type Props = {
  data?: Record<string, unknown>;
};

const _CopyFC: FC<Props> = () => { return (<></>)}




