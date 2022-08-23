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
import Message from "../../components/ui/Message";
import { useRouter } from "next/router";

const SignupPassword = () => {
  const [userPassword, setUserPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  const { name, email, password, dob, jobRole } = useSelector(
    (state) => state.signupReducer
  );
  console.log(name, email, password, dob, jobRole);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchPassword(userPassword));
    setIsSubmit(true);
    setUserPassword("");
    setTimeout(() => {
      setIsSubmit(false);
      router.push("../Home");
    }, 1000);
  };
  const nameHandler = (event) => {
    setUserPassword(event.target.value);
  };

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
        {isSubmit && <Message />}
      </form>
    </Container>
  );
};

export default SignupPassword;
