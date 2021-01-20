import { useSelector } from 'react-redux';
import { contactsSelectors } from './redux/contacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import LoaderComponent from './components/LoaderComponent';

function App() {
  const isLoading = useSelector(contactsSelectors.isLoading);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && <LoaderComponent />}
      <ToastContainer autoClose={3700} />
    </Container>
  );
}

export default App;
