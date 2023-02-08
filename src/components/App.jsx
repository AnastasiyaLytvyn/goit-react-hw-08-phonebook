// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Container, TitlePhone, TitleContacts } from './App.styled';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { RotatingLines } from 'react-loader-spinner';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

export function App() {
  // const dispatch = useDispatch();
  // // const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Route>

      {/* <Container>
      <TitlePhone>Phonebook</TitlePhone>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>

      <Filter />
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="26"
          visible={true}
        />
      )}
      <ContactList />
    </Container> */}
    </Routes>
  );
}
