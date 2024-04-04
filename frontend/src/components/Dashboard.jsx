import React from 'react'
import DashboardOverview from './DashboardOverview'
import RecentAppointments from '../../../../components/src/Components/RecentAppointments'
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