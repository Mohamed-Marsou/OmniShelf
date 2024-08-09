import Link from 'react-dom'
import "../scss/nav.scss"
import React, { useRef } from 'react';
import UserLevel from './navComp/Level'
import NavLinks from './navComp/NavLinks'
function Nav() {
    const formRef = useRef(null);


    return (
        <nav>
            <div className="form_wrapper">

                <form className='search_inp'>
                    <input type="search" placeholder='SEARCH' />
                    <button type='submit'>
                        <img src="/icons/search.png" alt="search" />
                    </button>
                </form>
            </div>

            <div className="profile_wrapper">
                < UserLevel />
                <div className="user">
                    < NavLinks />
                </div>

            </div>
            <div className="mobileSearchInput">
                <form ref={formRef}>
                    <input type="search" placeholder='SEARCH' />
                    <button type='submit'>
                        <img src="/icons/search.png" alt="search" />
                    </button>
                </form>
            </div>
        </nav>
    )
}
export default Nav;