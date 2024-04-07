import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Cards from '../components/Cards';
import Calender from '../components/Calender';
import "../components/preloader.css";
import Clubs from '../components/Clubs';
import NotificationPanel from "../components/NotificationPanel";

const Home = () => {

  useEffect(() => {
    const preloader = document.getElementsByClassName("loading");
    setTimeout(function(){
      preloader[0].style.display = "none";
    }, 3000);

    const main = document.getElementById("main");
    setTimeout(function(){
      main.style.display = "block";
    }, 3000);
  }, []);

  return (
    <>
      <div className="loading" style={{

      }}>
        <div className="logo"><img src="https://cdni.iconscout.com/illustration/premium/thumb/welcome-3688628-3231459.png?f=webp" alt="" style={{width: '350px'}} /></div>
        <div className="dots animate">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <div id="main" style={{ display: 'none' }}>
        <div className="container-home flex-row">
          <div className="nav"><Nav /></div>
          <div className="flex-col">
            <div className="cards"><Cards /></div>
            <div className="flex-row">
              <div className="announcements"><NotificationPanel/></div>
              <div className="calendar"><Calender /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
