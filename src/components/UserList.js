import { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, [getUsers, users]);

  return <div>userlist</div>;
};

export default UserList;
