import React, { useState, useEffect } from 'react';
import FavCard from './../../components/favCard/FavCard';
import "./favourite.scss";

function Favourite() {

    // const [favData, setFavData] = useState(null);
    const favLocation = localStorage.getItem("favLocations") ? JSON.parse(localStorage.getItem("favLocations")) : [];

    // useEffect( () => {

    //     let arrLocations= [];
    //     if (favLocation.length !==0) {
    //         for(let key in favLocation) {
    //             console.log("fav", favLocation[key]);
    //             const axios = require('axios');
    //             axios.get(`/api/location?lat=${favLocation[key].latitude}&long=${favLocation[key].longitude}`)
    //             .then( response => {
    //                 console.log("in the favourite",response.data);
    //                 arrLocations.push(response.data);
    //                 console.log("arrLocations",arrLocations);
    //             })
    //             .catch( error => {
    //                 console.log(error);
    //             })
    //         }
    //     }
       
    // },[])

    return (
        <div className="favourite-page">
            {
                favLocation.length !==0 ?
                    favLocation.map((locaion, index) => (
                        <FavCard data={locaion} key={index}/>
                    ))
                : <span className="no-item">هیچ موردی یافت نشد</span>
            }
        </div>
    )
}

export default Favourite;