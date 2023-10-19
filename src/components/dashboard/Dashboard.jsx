import React from 'react'
import TableProject from './tables/TableProject'
import TableSkill from './tables/TableSkill'
import s from './Dashboard.module.css'


const Dashboard = () => {
  return (
    <div className={s.dashboard_page}>
      <TableProject />
      <TableSkill />
    </div>
  )
}

export default Dashboard
