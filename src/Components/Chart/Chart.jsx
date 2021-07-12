import React, { useEffect, useState } from "react";
import { getDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({ data: { confirmed, recovered, deaths }, country }) {
  const [dailydata, setDailydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetched = await getDailyData();
      setDailydata(fetched);
    };
    fetchData();
  }, []);
  console.log(country);

  const linechart = dailydata.length ? (
    <Line
      data={{
        labels: dailydata.map(({ date }) => date),
        datasets: [
          {
            data: dailydata.map(({ confirmed }) => confirmed),
            borderColor: "#83c2ff",
            fill: true,
            label: "Infected",
          },
          {
            data: dailydata.map(({ deaths }) => deaths),
            borderColor: "#ff7171",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected ", "Recovered ", "deaths"],
        datasets: [
          {
            backgroundColor: ["#83c2ff", "#82ff9d", "#ff7171"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        lengend: { display: false },
        title: { display: true, text: `${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : linechart}</div>
  );
}

export default Chart;
