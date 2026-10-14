import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
const TitleSection = ({title}) => {
    return (
        <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-black">{title}</h2>
            <BsThreeDotsVertical className="cursor-pointer text-xl text-violet-600" />
        </div>
    )
}

export default TitleSection