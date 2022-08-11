import React, { useState } from "react";

import {
  Divider,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import classes from "../../styles/SignUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchName } from "../../redux/signup/signupAction";
import { useRouter } from "next/router";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const { name } = useSelector((state) => state.signupReducer);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchName(userName));
    router.push("../SignupEmail");
    setUserName("");
  };
  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Container className={classes.flexBox}>
      <form onSubmit={handleSubmit}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <Typography variant="h5" component="h5" className={classes.center}>
              SignUp
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              component="div"
              className={classes.topMargin}
            >
              <TextField
                required
                id="outlined-required"
                label="Name"
                value={userName}
                onChange={nameHandler}
                fullWidth
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.flexEnd}>
            <Button size="small" variant="outlined" type="submit">
              Next
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
};

export default Signup;
