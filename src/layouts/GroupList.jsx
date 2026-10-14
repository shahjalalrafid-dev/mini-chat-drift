import React from 'react'
import TitleSection from '../components/TitleSection'

const GroupList = ({name, bio, className}) => {
  return (
    <div className={`shrink-0 rounded-2xl bg-white p-4 shadow-md  overflow-y-scroll h-[300px] ${className}`}>

            <TitleSection title='Groups List' />

            {/* Group 1 */}
            <div className="flex items-center gap-3 border-b border-gray-300 py-3">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gray-200">
                    
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-black">{name}</h3>
                    <p className="text-sm text-gray-500">{bio}</p>
                </div>

                <button className="rounded-md bg-violet-600 px-5 py-1 font-semibold text-white hover:bg-violet-700">
                    Join
                </button>
            </div>

            {/* Group 2 */}
            <div className="flex items-center gap-3 border-b border-gray-300 py-3">
                <div className="h-16 w-16 shrink-0 rounded-full bg-gray-200"></div>

                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-black">Friends Forever</h3>
                    <p className="text-sm text-gray-500">Good to see you.</p>
                </div>

                <button className="rounded-md bg-violet-600 px-5 py-1 font-semibold text-white hover:bg-violet-700">
                    Join
                </button>
            </div>

            {/* Group 3 */}
            <div className="flex items-center gap-3 py-3">
                <div className="h-16 w-16 shrink-0 rounded-full bg-gray-200"></div>

                <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-black">Crazy Cousins</h3>
                    <p className="text-sm text-gray-500">What plans today?</p>
                </div>

                <button className="rounded-md bg-violet-600 px-5 py-1 font-semibold text-white hover:bg-violet-700">
                    Join
                </button>
            </div>

        </div>
  )
}

export default GroupList