import React from 'react';
import "../scss/sideBar.scss";

function SideBar() {
    return (
        <aside>
            <div className='aside_logo'>
                <a href="#">
                    <img src="/icon.png" alt="logo" />
                </a>
            </div>
            <div className='sideLinks'>
                <a href="#" className='activeLink'>
                    <i className="fa-solid fa-compass"></i>
                    Discover
                </a>
                <a href="#">
                    <i className="fa-solid fa-gamepad"></i>
                    Games
                </a>
                <a href="#">
                    <i className="fa-solid fa-video"></i>
                    Movies
                </a>
                <a href="#">
                    <i className="fa-solid fa-book"></i>
                    Books
                </a>
                <a href="#">
                    <i className="fa-solid fa-compact-disc"></i>
                    Music
                </a>
                <a href="#">
                    <i className="fa-solid fa-shekel-sign"></i>
                    My list
                </a>
            </div>
            <div className="logout">
                <a href="#" id='aside_logOut'>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    Logout
                </a>
            </div>
        </aside>
    );
}

export default SideBar;
