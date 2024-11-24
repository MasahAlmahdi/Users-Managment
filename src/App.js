import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import UserList from './components/UserList/UserList';
import { Layout } from 'antd';

const {Content} = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Layout>
        <Content style={{ padding: '24px' }}>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          {/* <Route path='/' element={<AddUserForm/>}/> */}
        </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
