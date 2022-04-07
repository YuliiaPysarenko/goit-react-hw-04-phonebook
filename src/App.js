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
      try {
        const id = nanoid();
        setContacts((state) => {
          localStorage.setItem("react-yp-hw4-contacts", JSON.stringify([...state, {...data , id} ]));
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(`${data.name} is already in contacts`);
    }
  }

  const handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    setFilter(value);
    console.log(contacts);
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
