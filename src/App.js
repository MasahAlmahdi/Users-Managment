import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UserList from './components/UserList/UserList';
import { Layout } from 'antd';
import AddUserForm from './components/AddUserForm/AddUserForm';
import { useEffect, useState } from 'react';

const {Content} = Layout;

function App() {
   const [localUsers, setLocalUsers] = useState(() => {
    const savedUsers = localStorage.getItem("localUsers");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  useEffect(() => {
    localStorage.setItem("localUsers", JSON.stringify(localUsers));
  }, [localUsers]);

  const addUser = (newUser) => {
    setLocalUsers((prev) => [...prev, newUser]);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Content style={{ padding: '24px' }}>
        <Routes>
          <Route path='/' element={<UserList localUsers={localUsers}/>}/>
          <Route path='/add-user' element={<AddUserForm onUserAdded={addUser} />}/>
        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
