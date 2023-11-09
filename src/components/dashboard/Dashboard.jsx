import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import TableProject from './tables/TableProject'
import TableSkill from './tables/TableSkill'
import { signout } from '../../store/actions/user'
import { ToastContainer } from 'react-toastify'
import s from './Dashboard.module.css'


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
      dispatch(signout());
      navigate(-1)
  }

  return (
    <div className={s.dashboard_page}>
      <ToastContainer></ToastContainer>
      <TableProject />
      <TableSkill />
      <div >
        <button className={s.flat_button}
          onClick ={handleClick}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard
