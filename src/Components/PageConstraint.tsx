import { ReactNode } from "react";

export default (props:{children?:ReactNode, id?:string}) => {
    return (
        <div className="flex flex-col w-[90%] max-w-[900px]" {...props} />
    )
}