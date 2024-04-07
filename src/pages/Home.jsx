import React from 'react'
// import Sidebar from '../components/Sidebar'
// import Chat from '../components/Chat'
import Nav from '../components/Nav'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <div className="container flex-row">
      <div className="nav"><Nav /></div>
      <div className="flex-col">
        <div className="cards"><Cards /></div>
        <div className="flex-row">
          <div className="announcements" />
          <div className="events" />
          <div className="calender" />
        </div>
      </div>
    </div>
  )
}

export default Home