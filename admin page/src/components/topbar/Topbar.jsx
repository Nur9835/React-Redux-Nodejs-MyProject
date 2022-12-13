import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (

    <div className="topbar">

      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="logo">ADMİN PAGE</span>
        </div>

        <div className="topRight">

          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>
          
          {/* <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" /> */}
        
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEufDrjwQMrQg/profile-displayphoto-shrink_800_800/0/1654891184253?e=1675900800&v=beta&t=Xhqb0nFJsHoC74hxPpIirjsO3HN2YcaKEHLJ8QfePdo" alt="" className="topAvatar" />
        
        
        </div>


      </div>

    </div>

  );
}