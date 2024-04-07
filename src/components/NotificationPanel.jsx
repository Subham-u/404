
import React, { useState } from 'react';
import './NotificationPanel.css';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  const handleAddNotification = () => {
    let value = document.querySelector("#input").value;
    if (value != ""){
    const newNotification = {
      id: Math.random().toString(),
      message : value,
    };
    setNotifications([...notifications, newNotification]);
    document.querySelector("#input").value="";
  }
  };

  const handleRemoveNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return (
    <>
    <h1 style={{textAlign:"center",color:"white"}}>Reminders</h1>

    <div className="notification-panel" >
      <input type='text' style={{width:"275px", height:"50px",fontSize:"16px"}} id='input'/>
      <button onClick={handleAddNotification} style={{width:"100px",height:"35px",fontWeight:"900",backgroundColor:"blue",color:"white",border:"2px solid white",borderRadius:"10px",padding:"5px",marginTop:"20px",marginLeft:"55px"}}>Add To Do</button>
      <div className="notification-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            <span>{notification.message}</span>
            <button style={{backgroundColor:"green",fontSize:"1rem",fontWeight:"800"}} onClick={() => handleRemoveNotification(notification.id)}>
              Mark as Done.
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NotificationPanel;
