import PropTypes from 'prop-types'

const UnorderedList = ({ list }) => {
    return (
        <nav>
            <ul>
                {list.map(({ linkName, linkUrl }, index) => (
                    <li key={index + linkName}>
                        <a href={linkUrl}>{linkName}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

UnorderedList.propTypes = {
    list: PropTypes.array,
}

export default UnorderedList
