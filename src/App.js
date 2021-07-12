import React from "react";
import { Typography } from "@material-ui/core";
import { Chart, Cards, CountryPicker } from "./Components";
import styles from "./App.module.css";
import covidImage from "./Images/img.png";
import { fetchData } from "./api/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const apidata = await fetchData();
    this.setState({ data: apidata });
  }
  hanlde = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Typography variant="h1" color="textPrimary" className={styles.title}>
            COVID-19
          </Typography>
          <img className={styles.img} src={covidImage} alt="covid-19" />
        </div>
        <Cards data={this.state.data} />
        <CountryPicker handle={this.hanlde} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
