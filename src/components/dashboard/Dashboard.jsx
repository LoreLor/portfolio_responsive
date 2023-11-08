import React from 'react'
import TableProject from './tables/TableProject'
import TableSkill from './tables/TableSkill'
import s from './Dashboard.module.css'
import { ToastContainer } from 'react-toastify'


const Dashboard = () => {
  return (
    <div className={s.dashboard_page}>
      <ToastContainer></ToastContainer>
      <TableProject />
      <TableSkill />
    </div>
  )
}

export default Dashboard
