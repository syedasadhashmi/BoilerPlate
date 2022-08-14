import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout/Layout';
import CardTemp from '../../components/ui/CardTemp';
import { fetchUsers, fetchSecondUrlData } from '../../redux/users/usersAction';
import { apiUrl2 } from '../../utils/constant';
const Home = () => {
  const dispatch = useDispatch();
  const { users, secondUrlData } = useSelector((state) => state.usersReducer);
  const num = users && users.slice(0, 9);

  console.log(users);
  console.log(num);
  // console.log(secondUrlData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const fetchSingleNews = Promise.all(
    num.map(async (id) => {
      return axios
        .get(`${apiUrl2}${id}.json`)
        .then((response) => {
          console.log(response.data.title);
          // dispatch(fetchSecondUrlData(response));
        })
        .catch((error) => {
          console.log(error);
        });
    })
  );
  // console.log(fetchSingleNews);
  // fetchSingleNews;
  // const fetchSingleNews = () => {
  //   num.map((id) => {
  //     axios
  //       .get(`${apiUrl2}${id}.json`)
  //       .then((response) => {
  //         console.log(response.data.title);
  //         // dispatch(fetchSecondUrlData(response));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // };
  // fetchSingleNews();
  return (
    <Layout>
      <CardTemp />
    </Layout>
  );
};

export default Home;
