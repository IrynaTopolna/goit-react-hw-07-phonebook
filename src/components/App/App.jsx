import { GlobalStyles } from '../GlobalStyles';
import PhoneBookForm from '../PhoneBookForm';
import ContactsList from '../ContactsList';
import Filter from 'components/Filter';
import Layout from '../Layout';
import { Title, Title2 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Title>My phonebook</Title>
      <PhoneBookForm />

      <Title2>My contacts</Title2>
      <Filter />
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length > 0 && <ContactsList />}

      <GlobalStyles />
    </Layout>
  );
}
