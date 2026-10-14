import React from 'react'
import Grid from '@mui/material/Grid'
import { CiSearch } from "react-icons/ci";

import { BsThreeDotsVertical } from "react-icons/bs";
import UserList from '../layouts/UserList';
import GroupList from '../layouts/GroupList';
import FreindList from '../layouts/FreindList';
import FreindRequest from '../layouts/FreindRequest';
import MyGroups from '../layouts/MyGroups';
import BlockedUsers from '../layouts/BlockedUsers';


const Home = () => {
  return (
    <>
      <div className='mt-5'>
        <Grid container spacing={2}>

          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10 ">

              {/* Search Bar */}
              <div className="flex h-14 shrink-0 items-center justify-between rounded-2xl bg-white px-5 shadow-md">
                <CiSearch className="text-2xl text-black" />

                <input
                  type="text"
                  placeholder="Search"
                  className="ml-5 w-full border-none bg-transparent text-sm outline-none placeholder:text-gray-400"
                />

                <BsThreeDotsVertical className="cursor-pointer text-xl text-violet-600" />
              </div>

              {/* Groups List */}
             <GroupList />
            </div>
          </Grid>
          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10">

              

              {/* Groups List */}
              <FreindList className= 'h-[395px]' />
            </div>
          </Grid>
          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10">

              

              {/* Groups List */}
              <UserList className='h-[395px]' />
            </div>
          </Grid>
          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10">

              

              {/* Groups List */}
              <FreindRequest name="" bio="" className ='h-[395px]'/>
            </div>
          </Grid>
          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10">

              

              {/* Groups List */}
              <MyGroups name="" bio="" className ='h-[395px]'/>
            </div>
          </Grid>
          <Grid size={4}>
            <div className="flex  w-full flex-col gap-10">

              

              {/* Groups List */}
              <BlockedUsers name="" bio="" className ='h-[395px]'/>
            </div>
          </Grid>
          


        </Grid>

      </div>
    </>


  )
}

export default Home