import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import CardTemp from "../../components/ui/CardTemp";
import { fetchUsers, fetchSecondUrlData } from "../../redux/users/usersAction";
import { apiUrl2 } from "../../utils/constant";
const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  const [news, setNews] = useState({});
  const num = users && users.slice(0, 9);

  console.log(users);
  console.log(num);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const singleNews = num.map((id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`${apiUrl2}${id}.json`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
    console.log("promise", promise);
    return promise;
  });

  Promise.all(singleNews)
    .then((status) => {
      console.log("status", status);
    })
    .catch((err) => {
      console.log("err", err);
    });

  return (
    <Layout>
      <CardTemp />
    </Layout>
  );
};

export default Home;
