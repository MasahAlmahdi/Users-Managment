import React from 'react'
import useUsers from '../../query/useUsers';
// import Loader from '../Loader'

export default function UserList() {
    const {data: users, isLoading, isError, error}=useUsers();

    if(isError) return <p>{error.message}</p>;
    // if(isLoading) return <Loader/>;
    if (!users || users.length === 0) {
        return <p>No users found</p>;
      }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User List</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
