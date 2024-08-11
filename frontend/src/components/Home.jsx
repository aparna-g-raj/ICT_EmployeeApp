import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";
import axios from "axios";

const demoData = [
  {
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdoP73up6fW9xShmRux25f4wSE5d3m8NUQ7cDQVk_TW2vULwpNeQ48vjJNLiuwyh7_II&usqp=CAU",
    EmpName: "Margret John",
    designation: "Knowledge Officer",
    empId: "KO 551"
  },
  {
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdoP73up6fW9xShmRux25f4wSE5d3m8NUQ7cDQVk_TW2vULwpNeQ48vjJNLiuwyh7_II&usqp=CAU",
    EmpName: "Shankaran T",
    designation: "Lead Knowledge Officer",
    empId: "LKO 123"
  },
  {
    img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdoP73up6fW9xShmRux25f4wSE5d3m8NUQ7cDQVk_TW2vULwpNeQ48vjJNLiuwyh7_II&usqp=CAU",
    EmpName: "Ameen M",
    designation: "HR",
    empId: "IN 54"
  },
];

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Uncomment the following lines when connecting to your backend
    // axios
    //   .get("http://localhost:3001/get")
    //   .then((res) => {
    //     console.log(res);
    //     setData(res.data);
    //   })
    //   .catch((err) => console.log(err));

    // Use demo data for now
    setData(demoData);
  }, []);

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card className="card">
              <CardContent>
                <img
                  src={val.img_url}
                  className="profile-img"
                  alt="employee"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" variant="contained" color="secondary">
                  Delete
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
