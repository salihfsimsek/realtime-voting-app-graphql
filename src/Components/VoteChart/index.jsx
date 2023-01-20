import React, { useEffect, useState } from "react";

//ApexCharts
import Chart from "react-apexcharts";

const VoteChart = ({ data }) => {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const chartOptions = {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      xaxis: {
        categories: data.map((option) => option.title),
      },
      tooltip: {
        enabled: false,
      },
    };

    const dataSeries = [
      {
        name: "Total",
        data: data.map((option) => option.votes_aggregate.aggregate.count),
      },
    ];

    setOptions(chartOptions);
    setSeries(dataSeries);

    console.log(dataSeries);
    console.log(chartOptions);
  }, [data]);

  return (
    <div id="vote-chart">
      <Chart options={options} series={series} type="bar" />
    </div>
  );
};

export default VoteChart;
