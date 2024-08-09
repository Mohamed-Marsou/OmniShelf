import React from 'react';

const NavLinks = () => {
    const handleSearchClick = () => {
        if (formRef.current) {
            formRef.current.classList.toggle('showQueryMobile');
        }
    };

    return (
        <>
            <div className="notification">
                <div className='n-w'>
                    <img src="/icons/notification-icon.png" alt="notification-icon" title='Notification' />
                    <div className="n-counter">
                        01
                    </div>
                </div>
            </div>
            <div className="user-profile">
                <div>
                    <img src="/icons/user-icon.png" alt="user-icon" title='Visit Profile' />
                </div>
            </div>
            <div className="mobile-search-btn">
                <div onClick={handleSearchClick}>
                    <img src="/icons/search.png" alt="search" title='Search' />
                </div>
            </div>
        </>
    )
}
export default NavLinks