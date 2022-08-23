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
import { fetchJobRole } from "../../redux/signup/signupAction";
import Link from "next/link";
import { useRouter } from "next/router";
const JobRole = () => {
  const [userJobRole, setUserJobRole] = useState("");
  const dispatch = useDispatch();
  const { jobRole } = useSelector((state) => state.signupReducer);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchJobRole(userJobRole));
    router.push("../SignupPassword");
    setUserJobRole("");
  };
  const nameHandler = (event) => {
    setUserJobRole(event.target.value);
  };
  console.log(jobRole);
  return (
    <Container className={classes.flexBox}>
      <form onSubmit={handleSubmit} className={classes.formFlex}>
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
                label="Job Role"
                id="outlined-required"
                type="text"
                value={userJobRole}
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

export default JobRole;
