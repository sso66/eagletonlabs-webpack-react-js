// File: src/views/Home/HomeView.jsx
// Date: 9/18/2020
// Note: Observer Design Pattern and Participants
// ................................................................................
console.info("Mounting src/views/Home/Home.jsx... <Home />");

// "customer": CLIENT - parent
//........................................
import React from "react";
// import Header from '../../components/Site/Header/Header'
// import { Timestamp } from '../../components/Features/Timestamp';
// import { ActionLink, LoginControl, Toggle } from '../../components/Features/Concepts'
// import { MobileFirst } from '../../components/Features/Matrix'
// import SourceOrder from '../../components/Features/Flexbox/SourceOrder';

import "./home.sass";

const Home = (props) => {
  return (
    <div className="homeview">
      {/* <Header /> */}
      <h2>Eagleton Labs</h2>
      <h3 style={{ textAlign: "center" }}>Home</h3>
      {/* <h3><b>Timestamp Component</b></h3> */}
      {/* <Timestamp 
                currentTime={props.currentTime.toString()}
                currentLocalTime={ props.currentTime.toLocaleString()}
                updateTime={props.updateTime}
            /> */}
      {/* </div> */}
      {/* <ActionLink /> */}
      {/* <LoginControl /> */}
      {/* <Toggle /> */}
      {/* <SourceOrder /> */}
      {/* <MobileFirst /> */}
    </div>
  );
};

export default Home;

// eof