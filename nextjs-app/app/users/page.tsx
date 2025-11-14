import { lightningCssTransform } from 'next/dist/build/swc/generated-native';
import React from 'react'

interface Users {
  id: number,
  name: string
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-cache'});
  const users: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {new Date().toLocaleTimeString()}
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UsersPage