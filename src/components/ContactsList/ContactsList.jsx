import Contact from 'components/Contact';
import { Item, List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFiltredNames, selectContacts } from 'redux/selectors';

const ContactsList = () => {
  const filtredNames = useSelector(selectFiltredNames);
  const contacts = useSelector(selectContacts);

  return (
    <>
      <List>
        {filtredNames
          ? filtredNames.map(contact => (
              <Item key={contact.id}>
                <Contact
                  name={contact.name}
                  number={contact.phone}
                  id={contact.id}
                />
              </Item>
            ))
          : contacts.map(contact => (
              <Item key={contact.id}>
                <Contact
                  name={contact.name}
                  number={contact.phone}
                  id={contact.id}
                />
              </Item>
            ))}
      </List>
    </>
  );
};

export default ContactsList;
