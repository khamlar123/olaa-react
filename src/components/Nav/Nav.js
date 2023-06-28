import './Nav.scss'
import logo from '../../images/logo olaa.svg'
import searchIcon  from '../../images/icon-home/Secrch.svg'
import lgIcon from '../../images/icon-home/usa_flag.svg'
function Nav() {



    return(
        <>
            <div className="nav-wrapper">
                <div className="nav-content">
                    <div className='logo'>
                        <div className='logo-farm'>
                            <img src={logo} alt='img'/>
                        </div>
                    </div>
                    <dvi className="search">
                        <div className='search-content'>
                            <input type='text' />
                            <button>
                                <img src={searchIcon} alt=""/>
                            </button>
                        </div>
                    </dvi>

                    <div className='iocns'>
                        <div className='icon-item'>
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            User
                        </div>
                        <div className='icon-item'>
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            Card
                        </div>
                        <div className='icon-item'>
                                <div className='lg-img'>
                                    <img src={lgIcon} alt='lg'/>
                                </div>
                                ENG
                        </div>
                    </div>
                </div>

    
            </div>
        </>
    )
}

export default Nav;