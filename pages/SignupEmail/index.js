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
import { fetchEmail } from "../../redux/signup/signupAction";
import Link from "next/link";
const SignupEmail = () => {
  const [userEmail, setUserEmail] = useState("");
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.signupReducer);
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserEmail("");
    dispatch(fetchEmail(userEmail));
  };
  const nameHandler = (event) => {
    setUserEmail(event.target.value);
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
                label="Email"
                type="email"
                value={userEmail}
                onChange={nameHandler}
                fullWidth
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.flexBetween}>
            <Link href={"../Signup"}>
              <Button size="small" variant="outlined">
                Back
              </Button>
            </Link>
            <Link href={"../SignupDOB"}>
              <Button size="small" variant="outlined" type="submit">
                Next
              </Button>
            </Link>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
};

export default SignupEmail;
