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
    .then(response => console.log(response))

    setShowCreate(false);
  }




  return (
    <Fragment>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />
          {showCreate && <Create onClose={addUserCloseHandler} onSave={onCreateSubmitHandler} />}
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
