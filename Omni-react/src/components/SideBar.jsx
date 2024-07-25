import React from 'react';
import "../scss/sideBar.scss";

function SideBar() {
    return (
        <aside>
           <a href="#">Discover</a>
           <a href="#">Games</a>
           <a href="#">Movies</a>
           <a href="#">Books</a>
           <a href="#">Music</a>
           <a href="#" id='aside_logOut'>Logout</a>
        </aside>
    );
}

export default SideBar;
