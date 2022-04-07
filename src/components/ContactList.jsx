import ContactItem from './ContactItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Li = styled.li`
    margin-bottom: 10px;
`

const Button = styled.button`
    margin-left: 10px;
`

const ContactList = ({filter, items, removeContact}) => {
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul>
            {filteredItems.map(({id, name, number}) => 
                <Li key={id}>
                    <ContactItem key={id} name={name} number={number} removeContact={removeContact} />
                        <Button data-id={id} onClick={removeContact}>Delete</Button>
                </Li>)
            }
        </ul>
    )
}

ContactList.propTypes = {
    filter: PropTypes.string.isRequired, 
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired, 
        number: PropTypes.string.isRequired,
    })).isRequired, 
    removeContact: PropTypes.func.isRequired,
}

export default ContactList;