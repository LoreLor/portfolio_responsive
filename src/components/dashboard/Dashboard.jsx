import React from 'react'
import TableProject from './tables/TableProject'
import s from './Dashboard.module.css'


const Dashboard = () => {
  return (
    <div className={s.dashboard_page}>
      <TableProject />
    </div>
  )
}

export default Dashboard
