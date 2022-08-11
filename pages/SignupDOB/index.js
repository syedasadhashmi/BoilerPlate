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
import { fetchDOB } from "../../redux/signup/signupAction";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupDOB = () => {
  const [userDOB, setUserDOB] = useState("");
  const dispatch = useDispatch();
  const { DOB } = useSelector((state) => state.signupReducer);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchDOB(userDOB));
    router.push("../SignupPassword");
    setUserDOB("");
  };
  const nameHandler = (event) => {
    setUserDOB(event.target.value);
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
                type="date"
                value={userDOB}
                onChange={nameHandler}
                fullWidth
              />
            </Typography>
          </CardContent>
          <CardActions className={classes.flexBetween}>
            <Link href={"../SignupEmail"}>
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

export default SignupDOB;
