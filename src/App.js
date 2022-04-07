import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

const StyledBlock = styled.div`
  margin: 20px;
`;
const H1 = styled.h1`
  text-transform: uppercase;
`;
const H2 = styled.h2`
  font-weight: 500;
`;

export default function App() {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("react-yp-hw4-contacts")) ?? [] });

  const [filter, setFilter] = useState("");

  const formSubmitHandler = (data) => {
    const existedContact = contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    if (!existedContact) {
        const id = nanoid();
        const newArray = contacts.concat({...data , id});
        localStorage.setItem("react-yp-hw4-contacts", JSON.stringify(newArray));
        return setContacts(newArray);
    } else {
      alert(`${data.name} is already in contacts`);
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFilter(value);
  }

  const removeContact = e => {
    const findContact = contacts.filter((contact) => contact.id !== e.target.dataset.id)
    setContacts(findContact);
    localStorage.setItem("react-yp-hw4-contacts", JSON.stringify(findContact));
  }

  // render() {
  return (
    <StyledBlock>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={formSubmitHandler} />

      <H2>Contacts</H2>
      <Filter handleChange={handleChange} />
      <ContactList
        filter={filter}
        items={contacts}
        removeContact={removeContact}
      />
    </StyledBlock>
  );
  // }
}
