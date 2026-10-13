import Grid from '@mui/material/Grid'
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid size ={2} >
        <div className='items-center flex'>
          <Sidebar />
        </div>
        

      </Grid>
      <Grid size ={10}>
        <Outlet></Outlet>

      </Grid>

    </Grid>
  )
}

export default RootLayout