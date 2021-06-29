import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./css/UserNavigation.css";
import UserPage1 from "../../user_components/UserNavigation/UserPage1";
import doctor from "../user_assets/user__images/doctor.png";
import userimage from "../user_assets/user__images/userimage.jpg";
import ud1 from "../user_assets/user__images/ud1.jpg";
import ud2 from "../user_assets/user__images/ud2.jpg";
import ud3 from "../user_assets/user__images/ud3.png";
import ud4 from "../user_assets/user__images/ud4.jpg";
import ud5 from "../user_assets/user__images/ud5.jpg";
import un1 from "../user_assets/user__images/un1.jpg";
import { Typography, Paper } from "@material-ui/core";
import ud7 from "../user_assets/user__images/ud7.png";
import ud8 from "../user_assets/user__images/ud8.jpg";
import ud10 from "../user_assets/user__images/ud10.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(5),
    },
  },
  root1: {
    maxWidth: 345,
    margin: theme.spacing(5),
    borderRadius: theme.spacing(5),
  },
  media: {
    height: 250,
  },
}));
const UserNavigation = () => {
  const classes = useStyles();
  return (
    <>
      <UserPage1 />
      <div className="home">
        <div className="home__left">
          <div className="heading">
            <Typography
              className="title"
              variant="h3"
              style={{ marginTop: "100px", marginLeft: "-40px" }}
            >
              Providing the best
              <br /> online medical <br />
              consultation
            </Typography>
          </div>
          <div className="input">
            <button className="homesearch__button" type="submit">
              Find a doctor
            </button>
            <input placeholder="Location" style={{ marginLeft: "-20px" }} />
            <button className="home__button" type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="home__right">
          <img src={un1} alt="" />
        </div>
      </div>

      <Paper elevation={1} style={{ borderRadius: "10px" }}>
        <div className="user__doctor__section2">
          <img
            src={ud2}
            alt=""
            style={{
              width: "20%",
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "150px",
              borderRadius: "10px",
            }}
          />
          <img
            src={ud5}
            alt=""
            style={{
              width: "138px",
              height: "18vh",
              marginTop: "43px",
              marginLeft: "150px",
              borderRadius: "10px",
            }}
          />
          <span
            style={{
              margin: "188px 9px 0px -119px",
              color: "#00acb1",
              fontSize: "x-large",
              letterSpacing: "1px",
            }}
          >
            Consult
          </span>

          <img
            src={ud4}
            alt=""
            style={{
              width: "138px",
              height: "18vh",
              marginTop: "43px",
              marginLeft: "150px",
              borderRadius: "10px",
            }}
          />
          <span
            style={{
              margin: "188px 9px 0px -119px",
              color: "#00acb1",
              fontSize: "x-large",
              letterSpacing: "1px",
            }}
          >
            Pharmacy
          </span>

          <img
            src={ud3}
            alt=""
            style={{
              width: "138px",
              height: "18vh",
              marginTop: "43px",
              marginLeft: "150px",
              borderRadius: "10px",
            }}
          />
          <span
            style={{
              margin: "170px 9px 0px -119px",
              color: "#00acb1",
              fontSize: "x-large",
              letterSpacing: "1px",
            }}
          >
            Prescribe Online
          </span>
        </div>
      </Paper>
      <div className="user__containerdata">
        <h1>Akshay</h1>
        <h2>GMC:123456789</h2>
        <h2>Surgeon</h2>
        <h2>4.2 (11 reviews)</h2>
        <h2>London U.K</h2>
        <img className="container__image" src={doctor} alt="" />
      </div>
      <div className="container__data">
        <h1>Find you're best doctor here</h1>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fuga
          pariatur itaque sint. Id voluptatum ipsa laudantium, quis velit
          explicabo esse in quod beatae sit quos quo omnis, soluta temporibus!
        </h6>
        <button className="btn1">Make An appointment</button>
      </div>

      <div className="recomendation__section">
        <h3 style={{ marginTop: "50px" }}>Recomended for you</h3>
        <h4>
          We have selected a few resourses for you to improve care delivery
          billing, insurance and patients collections
        </h4>
        <div className="homecard__section1image">
          <div style={{ display: "flex", marginLeft: "200px" }}>
            <Card className={classes.root1}>
              <CardActionArea>
                <CardMedia
                  style={{ borderRadius: "25px" }}
                  className={classes.media}
                  image={ud7}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    Find doctor near you
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit saepe adipisci perferendis exercitationem sapiente,
                    non eos reiciendis quisquam magnam natus similique nulla
                    sunt quia repudiandae id dicta.
                  </Typography>
                  <button
                    className="btn1"
                    style={{
                      textTransform: "capitalize",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "#00acb1",
                      border: "1px solid #00acb1",
                    }}
                  >
                    View all doctor details
                  </button>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card className={classes.root1}>
              <CardActionArea>
                <CardMedia
                  style={{ borderRadius: "25px" }}
                  className={classes.media}
                  image={ud8}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    Book an appointment
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit saepe adipisci perferendis exercitationem sapiente,
                    non eos reiciendis quisquam magnam natus similique nulla
                    sunt quia repudiandae id dicta.
                  </Typography>
                  <button className="btn1" style={{ marginTop: "10px" }}>
                    Make an appointment
                  </button>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={classes.root1}>
              <CardActionArea>
                <CardMedia
                  style={{ borderRadius: "25px" }}
                  className={classes.media}
                  image={userimage}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    Get Consultation
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="p"
                    style={{ textAlign: "center" }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit saepe adipisci perferendis exercitationem sapiente,
                    non eos reiciendis quisquam magnam natus similique nulla
                    sunt quia repudiandae id dicta.
                  </Typography>
                  <button
                    className="btn1"
                    style={{
                      textTransform: "capitalize",
                      marginTop: "10px",
                      backgroundColor: "white",
                      color: "#00acb1",
                      border: "1px solid #00acb1",
                    }}
                  >
                    Start Consultation
                  </button>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      <div className="user__doctor__section6">
        <h3>Catagories</h3>
        <h2>Consult by disease</h2>
        <button className="btn1" style={{ marginLeft: "70%" }}>
          See all spealist
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero,
          modi nemo incidunt voluptate id similique molestiae eum, ut mollitia
          harum, sed tempore fugiat pariatur veritatis eius animi aliquid earum!
        </p>

        <div className="section6">
          <div style={{ backgroundColor: "wheat" }}>
            <img src={ud1} />
          </div>
          <div>
            <img src={ud1} />
          </div>
          <div>
            <img src={ud1} />
          </div>
          <div>
            <img src={ud1} />
          </div>
        </div>
      </div>
      <div className="udn" style={{ marginTop: "3.5rem" }}>
        <img src={ud10} />
        <div className="udn11">
          <ul
            style={{
              marginLeft: "800px",
              marginTop: "-600px",
              letterSpacing: "1px",
            }}
          >
            <h2>Download Blind School app</h2>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                A powerful app that lets you manage and grow
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                Manage your profile with advanced profile editor
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                Respond to your patients' feedback
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                Provide online consultation to patients
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                See patient records
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                Track your clincs' performance
              </i>
            </p>
            <p className="pa">
              <i class="fa fa-check" style={{ color: "black" }}>
                Manage and track your prime subscription
              </i>
            </p>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "lightgray",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid gray",
                cursor: "pointer",
              }}
            >
              Download from play store
            </button>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "lightgray",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid gray",
                cursor: "pointer",
                marginLeft: "5px",
              }}
            >
              Download from Apple store
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserNavigation;
