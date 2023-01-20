import React from 'react'
import Favourite from './Favourite';
import Read from './Read';
import Unread from './Unread';
import { useState } from 'react';
import AllMails from './AllMails';
import './mailList.css';
import './Detail/detail.css'
const Homepage = () => {

    // defining filter variables
    const [fav, setFav] = useState(false);
    const [read, setRead] = useState(false)
    const [uRead, setURead] = useState(false)
    const [allMails, setAllMails] = useState(true)


   // filter variable behaviour functions.
   const handleClickAll = event => {
    setRead(false)
    setURead(false)
    setFav(false)
    setAllMails(true)
}

    const handleClickRead = event => {
        setRead(true)
        setURead(false)
        setFav(false)
        setAllMails(false)

    }
    const handleClickURead = event => {
        setRead(false)
        setURead(true)
        setFav(false)
        setAllMails(false)
    }

    const handleClickFav = event => {
        setFav(true)
        setURead(false)
        setRead(false)
        setAllMails(false)
    }


    return (
        <>
            <nav className='nav-btn'>
                <p>Filter By</p>
                <button className='filter-btn' onClick={handleClickAll}>All</button>
                <button className='filter-btn'onClick={handleClickURead}>Unread</button>
                <button className='filter-btn'onClick={handleClickRead}>Read</button>
                <button className='filter-btn'onClick={handleClickFav}>Favorite</button>
            </nav>

          {/* Fetching componets and filters */}
            <section>
                {allMails && <AllMails/>}

                {read && <Read /> }

                {uRead && <Unread />}

                {fav && <Favourite />}

            </section>

        </>

    )

}

export default Homepage