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
import { fetchPassword } from "../../redux/signup/signupAction";
import Link from "next/link";
import Message from "../../components/ui/message";
const SignupPassword = () => {
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const { name, email, password, DOB } = useSelector(
    (state) => state.signupReducer
  );

  const handleSubmit = (event) => {
    const userDetails = {
      name,
      email,
      user,
    };
    event.preventDefault();
    setUserPassword("");
    dispatch(fetchPassword(userPassword));
  };
  const nameHandler = (event) => {
    setUserPassword(event.target.value);
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
                type="password"
                label="password"
                value={userPassword}
                onChange={nameHandler}
                fullWidth
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.flexBetween}>
            <Link href={"../SignupDOB"}>
              <Button size="small" variant="outlined">
                Back
              </Button>
            </Link>

            <Button size="small" variant="outlined" type="submit">
              Next
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
};

export default SignupPassword;
