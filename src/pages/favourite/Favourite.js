import React from 'react';
import FavCard from './../../components/favCard/FavCard';
import "./favourite.scss";

function Favourite() {

    const favLocation = localStorage.getItem("favLocations") ? JSON.parse(localStorage.getItem("favLocations")) : [];

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