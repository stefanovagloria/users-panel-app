import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchBar } from './components/SearchBar';
import { UsersList } from './components/UsersList';
import { Pagination } from './components/Pagination';
import { createUser, getAllUsers } from './services/userService';
import { Create } from './components/Create';

function App() {

  const [users, setUsers] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
    country: '',
    city: '',
    street: '',
    streetNumber: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    imageUrl: '',
    country: '',
    city: '',
    street: '',
    streetNumber: ''
  });


  useEffect(() => {
    getAllUsers()
      .then(response => {
        setUsers(response.users)
      })
  }, [])

  const addUserHandler = () => {
    setShowCreate(true);
  }

  const addUserCloseHandler = () => {
    setShowCreate(false)
  }

  const onCreateSubmitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = Object.fromEntries(formData);

    createUser(userData)
      .then(user => {
        console.log(user.user)
        setUsers(state => [user.user, ...state])
      })

    setShowCreate(false);
  }

  const formChangeHandler = (e) =>{
    const value = e.target.value;
    const errors = {};

    if(e.target.name === 'firstName' && value.length < 3){
      errors.firstName = 'First name should be at least 3 characters long!';
    }

    if(e.target.name === 'lastName' && value.length < 3){
      errors.lastName = 'Last name should be at least 3 characters long!';
    }

    setErrors(errors)

    setFormValues(state => ({...state, [e.target.name]: e.target.value}))
  }


  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />
          {showCreate &&
            <Create
              onClose={addUserCloseHandler}
              onSave={onCreateSubmitHandler}
              formValues={formValues}
              formChangeHandler={formChangeHandler}
              errors={errors}
            />}
          <UsersList users={users} />
          <button className="btn-add btn" onClick={addUserHandler}>Add new user</button>
          <Pagination />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
