import PropTypes from 'prop-types';

const ContactItem = ({name, number}) => (
    <span> {name}: {number}</span>
)

ContactItem.propTypes = {
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired,
}


export default ContactItem;