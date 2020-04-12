import React, {useState} from 'react';
import "./home.scss";
import ToggleStar from "./../../components/toggleStar/ToggleStar";
import Location from './../../components/location/Location';

function Home() {

    // NOTE: I've added this function and a button to test the api call to the server. It can be deleted

    // const apiCall = (e) => {
    //     e.preventDefault();
    //     const axios = require('axios');
    //     console.log("clicked");
    //     axios.get("/data")
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    const ActiveCity= localStorage.getItem("location");

    return (
        <React.Fragment>
            {ActiveCity ? <div className="home-page">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 689" className="wave">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="HomeScreen">
                      <path d="M750,39.1V689H0V25.5c18.2-3.7,33.5-7.6,48-11.2C91.3,3.4,103.6,0,189,0c37.5,4,73.3,15.1,104.5,26.6s57.9,23.3,77,28.8c37.7,10.8,76.6,21.9,153.2,22h.3c76.4,0,115.3-11.1,152.9-21.8A573.83,573.83,0,0,1,750,39.1Z" style={{fill: 'white', opacity:"0.6"}}/>
                      <path d="M0,39.1V689H750V25.5c-18.2-3.7-33.5-7.6-48-11.2C658.7,3.4,646.4,0,561,0c-37.5,4-73.3,15.1-104.5,26.6s-57.9,23.3-77,28.8c-37.7,10.8-76.6,21.9-153.2,22H226c-76.4,0-115.3-11.1-152.9-21.8A573.83,573.83,0,0,0,0,39.1Z" style={{fill: 'white', opacity:"0.5"}}/>
                      <path d="M750,67.2c-38.2-5.5-64.2-12.4-87.8-18.8C621.4,37.4,586.1,28,505.5,28h-.4c-73.6,0-111,11.5-147.2,22.6-35.5,10.9-72.3,22.1-144.5,22.1h-.3c-72,0-108.7-11.2-144.2-22A547.67,547.67,0,0,0,0,34.2V689H750" style={{fill: "white"}}/>
                    </g>
                  </g>
                </svg>

                <ToggleStar/>

                <div className="info">
                    <span className="city-name">تهران</span>
                    <div className="date">
                        <span className="day">سه‌شنبه</span>
                        <span className="month">۸ خرداد</span>
                    </div>
                    <div className="weather">
                        <span className="title">آسمان صاف</span>
                        <span className="icon-down"></span>
                        <span className="min-temp">۲۱</span>
                        <span className="icon-up"></span>
                        <span className="max-temp">۳۴</span>
                    </div>
                </div>
            </div>
            : <Location/>}
        </React.Fragment>
        
    )
}

export default Home;