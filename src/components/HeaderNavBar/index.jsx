import { useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import useScrollDirection from '../../hooks/useScrollDirection'
import useScrollBlock from '../../hooks/useScrollBlock'
import LogoIcon from '../Icons/LogoIcon'
import MoonIcon from '../Icons/MoonIcon'
import SunIcon from '../Icons/SunIcon'
import HeartIcon from '../Icons/HeartIcon'
import StarIcon from '../Icons/StartIcon'
import MenuIcon from '../Icons/MenuIcon'
import UnorderedList from '../UnorderedList'
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

    return (
        <header>
            <nav data-scroll-direction={scrollDirection}>
                <div className="nav__home">
                    <LogoIcon
                        handle={() => setOpenMenu(false)}
                        openMenu={openMenu}
                        matches={matches}
                    />
                </div>
                <div className="nav__links">
                    <UnorderedList
                        list={[
                            { linkName: 'Sobre mí', linkUrl: '/' },
                            { linkName: 'Blog', linkUrl: '/' },
                            { linkName: 'Carrera', linkUrl: '/' },
                            { linkName: 'Contacto', linkUrl: '/' },
                        ]}
                    />
                </div>
                <div className="nav__controls">
                    <UnorderedList
                        list={[
                            { linkName: <MoonIcon />, linkUrl: '/' },
                            { linkName: <SunIcon />, linkUrl: '/' },
                            { linkName: <HeartIcon />, linkUrl: '/' },
                            { linkName: <StarIcon />, linkUrl: '/' },
                        ]}
                    />
                </div>
                <div className="nav__mobile-menu">
                    {!openMenu && <MenuIcon handle={handleOpenMenu} />}
                    <aside data-open={openMenu}>
                        <UnorderedList
                            list={[
                                { linkName: 'Sobre mí', linkUrl: '/' },
                                { linkName: 'Blog', linkUrl: '/' },
                                { linkName: 'Carrera', linkUrl: '/' },
                                { linkName: 'Contacto', linkUrl: '/' },
                            ]}
                        />
                        <UnorderedList
                            list={[
                                { linkName: <MoonIcon />, linkUrl: '/' },
                                { linkName: <SunIcon />, linkUrl: '/' },
                                { linkName: <HeartIcon />, linkUrl: '/' },
                                { linkName: <StarIcon />, linkUrl: '/' },
                            ]}
                        />
                    </aside>
                </div>
            </nav>
        </header>
    )
}

export default Header
