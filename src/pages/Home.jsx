import React from 'react'
// import Sidebar from '../components/Sidebar'
// import Chat from '../components/Chat'
import Nav from '../components/Nav'
import Cards from '../components/Cards'
import Calendar from '../components/Calender'
import Clubs from '../components/Clubs'
const Home = () => {

  let preloader =document.getElementsByClassName("loading");
      setTimeout(function(){
          preloader[1].style.display = "none";
          console.log(preloader)
      },5000)

  return (<>

     {/* <div className="loading">
        <div className="logo"><img src="/images/welcome-3688628-3231459.webp" alt="" style={{width: '350px'}} /></div>
        <div className="dots animate">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div> */}


    <div >
    <div className="container flex-row">
      <div className="nav"><Nav /></div>
      <div className="flex-col">
        <div className="cards"><Cards /></div>
        <div className="flex-row">
          <div className="announcements" ></div>
          <div className="calender" ><Calendar/></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home