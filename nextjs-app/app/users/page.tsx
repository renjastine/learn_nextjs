import { lightningCssTransform } from 'next/dist/build/swc/generated-native';
import React from 'react'

interface Users {
  id: number,
  name: string,
  email: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-cache' });
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {new Date().toLocaleTimeString()}
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage