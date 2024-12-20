import { ReactNode } from "react";

export default (props:{children?:ReactNode, color?:string}) => {
    return (
        <div className="flex flex-col w-full items-center min-h-screen" style={{backgroundColor:props.color}}>
            {props.children}
        </div>
    )
}