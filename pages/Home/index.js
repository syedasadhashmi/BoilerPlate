import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/layout/Layout";
import CardTemp from "../../components/ui/CardTemp";
import { fetchUsers } from "../../redux/users/usersAction";
import { apiUrl2 } from "../../utils/constant";
const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);
  const [news, setNews] = useState([]);
  let [startNum, setStartNum] = useState(0);
  let [endNum, setEndNum] = useState(9);
  console.log(users);
  // console.log(num);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    const num = users.slice(startNum, endNum);
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
        setNews([...news, ...status]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [users, startNum, endNum]);
  console.log(news);
  const moreNewsHandler = () => {
    let tempEnd = endNum;
    setEndNum(tempEnd + 6);
    setStartNum(tempEnd);
  };
  return (
    <Layout>
      <CardTemp props={news} />
      <Typography
        variant="div"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <Button variant="outlined" onClick={moreNewsHandler}>
          Load More
        </Button>
      </Typography>
    </Layout>
  );
};

export default Home;
