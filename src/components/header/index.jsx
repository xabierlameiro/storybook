import { useState, useEffect } from 'react'
import useScrollDirection from '../../hooks/useScrollDirection'
import useScrollBlock from '../../hooks/useScrollBlock'
import { useMediaQuery } from '@react-hook/media-query'
import './index.scss'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [blockScroll, allowScroll] = useScrollBlock()
    const scrollDirection = useScrollDirection()
    const matches = useMediaQuery('only screen and (min-width: 600px)')

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
        if (!openMenu) {
            blockScroll()
        } else {
            allowScroll()
        }
    }

    useEffect(() => {
        console.log(matches)
    }, [matches])

    return (
        <header>
            <nav data-scroll-direction={scrollDirection}>
                <div className="nav__home">
                    <div className={openMenu && !matches && 'animation'}>
                        <span
                            onClick={() => setOpenMenu(false)}
                            className="close"
                        >
                            X
                        </span>
                        <a
                            className={openMenu && !matches && 'animation2'}
                            href="/"
                        >
                            abier Lameiro
                        </a>
                    </div>
                </div>
                <div className="nav__links">
                    <ul>
                        <li>
                            <a href="/">Sobre mí</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Carrera</a>
                        </li>
                        <li>
                            <a href="/">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="nav__controls">
                    <ul>
                        <li>
                            <a href="/">
                                <svg
                                    className="icon moon"
                                    viewBox="-40 0 620 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                className="icon sun"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line
                                    x1="4.22"
                                    y1="4.22"
                                    x2="5.64"
                                    y2="5.64"
                                ></line>
                                <line
                                    x1="18.36"
                                    y1="18.36"
                                    x2="19.78"
                                    y2="19.78"
                                ></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line
                                    x1="4.22"
                                    y1="19.78"
                                    x2="5.64"
                                    y2="18.36"
                                ></line>
                                <line
                                    x1="18.36"
                                    y1="5.64"
                                    x2="19.78"
                                    y2="4.22"
                                ></line>
                            </svg>
                        </li>
                        <li>
                            <a href="/">
                                <svg
                                    className="icon heart"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <svg
                                    className="icon"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="nav__mobile-menu">
                    {!openMenu && (
                        <div className="menuIcon2" onClick={handleOpenMenu}>
                            <span>-</span>
                            <span>-</span>
                            <span>-</span>
                        </div>
                    )}
                    <aside data-open={openMenu}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="/">Sobre mí</a>
                                </li>
                                <li>
                                    <a href="/">Blog</a>
                                </li>
                                <li>
                                    <a href="/">Biblioteca</a>
                                </li>
                                <li>
                                    <a href="/">Contacto</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="/">icon</a>
                                </li>
                                <li>
                                    <a href="/">icon</a>
                                </li>
                                <li>
                                    <a href="/">icon</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </nav>
        </header>
    )
}

export default Header
