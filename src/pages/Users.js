import React from 'react'

const Users = () => {
  const user=[{name:'User1'},{name:'User2'}]
  return (
    <div>
      <ul>
      {user.map((users) => <li className='users'>{users.name}</li>)}
      </ul>
      <h1 className='users'>Users Page</h1>
    </div>
  )
}

export default Users

 



