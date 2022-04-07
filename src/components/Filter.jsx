import styled from 'styled-components';
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';

const Label = styled.label`
`

const Input = styled.input`
    display: block;
    margin: 10px 0 20px;
    padding: 2px;
`


const filterinputId = nanoid();

const Filter = ({handleChange}) => {
    return (
        <Label htmlFor={filterinputId}>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={filterinputId}
                onChange={handleChange}
                required />
        </Label>
    )
}


Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}

export default Filter;