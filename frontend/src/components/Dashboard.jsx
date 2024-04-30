import React from 'react'
import DashboardOverview from './DashboardOverview'
import RecentAppointments from './RecentAppointments'
import RecentFollowups from './RecentFollowups'

const Dashboard = () => {
  return (
	<>
    <DashboardOverview/>
    <RecentAppointments/>
    <RecentFollowups/>
  </>
  )
}

export default Dashboard