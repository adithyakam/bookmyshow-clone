import React from 'react'

import "./SmallBanner.css"

function SmallBanner() {
    return (
        <div className="smallBanner">
            <div className="smallBanner__Container">
                <div className="smallBanner__containers">
                        <p>Movies</p>
                        <p>Streams</p>
                        <p>Events</p>
                        <p>Play</p>
                        <p>Sports</p>
                        <p>Activities</p>
                        <p>FanHood</p>
                </div>
                <div className="smallBanner__containers">
                        <p>ListYourSHow</p>
                        <p>Corporates</p>
                        <p>Offers</p>
                        <p>GiftCards</p>
                </div>
            </div>
        </div>
    )
}

export default SmallBanner
