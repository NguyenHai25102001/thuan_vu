import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js"; // Import cả registerables
Chart.register(...registerables);

const ChartJS = ({ chartRef, data, labelsData, type }) => {
  const chartInstanceRef = useRef(null);

  const drawChart = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartRef.current && !!labelsData && !!data && !!type) {
      const ctx = chartRef.current.getContext("2d");
      const newChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labelsData,
          datasets: [
            {
              data: data,
              // backgroundColor: data.map((e) => (e > 30 ? "#0158FF" : "red")),

              backgroundColor: type.map((e) =>
                e === 1
                  ? "#0158FF"
                  : e === 2
                  ? "#AE6300"
                  : e === 3
                  ? "#F99F29"
                  : e === 4
                  ? "#FFCA85"
                  : e === 5
                  ? "#4E0B21"
                  : e === 6
                  ? "#BD1B51"
                  : e === 7
                  ? "#BD1B51"
                  : ""
              ),
              borderColor: type.map((e) =>
                e === 1
                  ? "#0158FF"
                  : e === 2
                  ? "#AE6300"
                  : e === 3
                  ? "#F99F29"
                  : e === 4
                  ? "#FFCA85"
                  : e === 5
                  ? "#4E0B21"
                  : e === 6
                  ? "#BD1B51"
                  : e === 7
                  ? "#BD1B51"
                  : ""
              ),
              borderWidth: 1,
              borderRadius: 10,
              barThickness: 12,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          responsive: true,
        },
      });

      chartInstanceRef.current = newChart;
    }
  };

  useEffect(() => {
    drawChart();
  }, [data, labelsData, type]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartJS;
