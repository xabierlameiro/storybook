import PropTypes from 'prop-types'

const LogoIcon = ({ handle, openMenu, matches }) => {
    const condition = openMenu && !matches

    const containerProps = {
        ...(condition && { className: 'animation' }),
    }

    const logoProps = {
        ...(condition && { className: 'animation2' }),
    }

    return (
        <div {...containerProps}>
            <span onClick={handle} className="close">
                X
            </span>
            <a {...logoProps} href="/">
                abier Lameiro
            </a>
        </div>
    )
}

LogoIcon.propTypes = {
    handle: PropTypes.func,
    openMenu: PropTypes.bool,
    matches: PropTypes.bool,
}

export default LogoIcon
