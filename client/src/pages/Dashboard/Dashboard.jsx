import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getCookie } from '../../utils/cookiesApis';

export default function Dashboard() {
  const user  = useSelector(state => state.auth.user);
  // console.log(user)
  if (!getCookie('authToken') && !user) {
    return <div className='text-2xl text-center my-4 font-bold'>Login Please</div>
  }
  return (
    <div className='text-2xl  bg-slate-900 min-h-screen text-center text-white font-bold'>
      <h1 className='py-5 '>

        {user?.role === 'admin' ? "Admin Dashboard"
          : user?.role === 'student' ? "Student Dashboard"
            : user?.role === 'agent' ? "Agent Dashboard"
              : null

        }
      </h1>
    </div>
  )
}
