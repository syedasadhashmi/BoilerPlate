import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import { fetchUsers } from '../../redux/users/usersAction';
const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  console.log(users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <Layout>
      {users
        ? users.map((items) => <div key={items.id}>{items.name}</div>)
        : []}
    </Layout>
  );
};

export default Home;
