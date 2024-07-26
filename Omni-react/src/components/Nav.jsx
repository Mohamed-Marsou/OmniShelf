import Link from 'react-dom'
import "../scss/nav.scss"
function Nav() {

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

                <div className="level_box" title='30%'>

                    <div className="level-progress"></div>
                    <img src="/icons/level-icons/l1.png" alt="level-icon" title='Level 1' />
                </div>

                <div className="user">
                    <div className="notification">
                        <div className='n-w'>
                            <img src="/icons/notification-icon.png" alt="notification-icon" title='Notification'/>
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
                        <div>
                            <img src="/icons/search.png" alt="search" title='Search' />
                        </div>
                    </div>

                </div>

            </div>
        </nav>
    )
}
export default Nav;