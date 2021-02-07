import PropTypes from 'prop-types'
import './index.scss'

const MenuIcon = ({ handle }) => {
    return (
        <div className="menuIcon2" onClick={handle}>
            <span>-</span>
            <span>-</span>
            <span>-</span>
        </div>
    )
}

MenuIcon.propTypes = {
    handle: PropTypes.func,
}

export default MenuIcon
