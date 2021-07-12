import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changedUrl = url;
  if (country) {
    changedUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, image, lastUpdate },
    } = await axios.get(changedUrl);
    return { confirmed, recovered, deaths, image, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modified = data.map((dailydata) => ({
      confirmed: dailydata.confirmed.total,
      deaths: dailydata.deaths.total,
      date: dailydata.reportDate,
    }));
    return modified;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
