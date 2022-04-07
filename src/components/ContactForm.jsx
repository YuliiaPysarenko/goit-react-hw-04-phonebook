import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from "nanoid";

const StyledForm = styled.form`
    border: 1px solid #000;
    padding: 10px;
    max-width: 400px;
`

const Label = styled.label`
`

const Input = styled.input`
    display: block;
    margin: 10px 0 20px;
    padding: 2px;
`

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #c0bfbf;
    padding: 5px;
    cursor: pointer;
`

export default function ContactForm({onSubmit}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();
    const numberInputId = nanoid();    

    function handleChange(e) {
        const { name, value } = e.target;

        switch (name) {
            case 'username':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({name, number});
        reset();
    };

    function reset() {
        setName('');
        setNumber('');
    }

    return (
    <StyledForm onSubmit={handleSubmit}>

        <Label htmlFor={nameInputId}>
            Name
            <Input
                type="text"
                name="username"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                id={nameInputId}
                onChange={handleChange}
                required />
        </Label>

        <Label htmlFor={numberInputId}>
            Number
            <Input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                id={numberInputId}
                onChange={handleChange}
                required
                />
        </Label>

        <Button type="submit">Add contact</Button>

    </StyledForm>
    )
}