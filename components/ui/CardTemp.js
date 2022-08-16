import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import classes from "../../styles/CardTemp.module.css";
// import { height } from "@mui/system";
const CardTemp = ({ props }) => {
  console.log("cardItem", props);
  return (
    <Grid container spacing={4}>
      {props.map((nid) => (
        <Grid item md={4} xs={12} sm={6} key={nid.id}>
          <a href={nid.url} target="_blank">
            <Card
              className={classes.cardStyle}
              sx={{
                marginTop: "20px",
                height: 300,
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  {nid.title.split(")")[0]})
                </Typography>
                <Typography
                  sx={{ mb: 1.5, textAlign: "center" }}
                  color="text.secondary"
                >
                  {nid.title.split(")")[1]}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {Date(nid.time * 1000).toLocaleString()}
                </Typography>
              </CardContent>
              {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
            </Card>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardTemp;
