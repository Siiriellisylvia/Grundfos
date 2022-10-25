const startingMinutes = 10;
let time = startingMinutes * 60;

let countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (startingMinutes < 0) {
    countdownEl.innerHTML = `Free`;
  } else {
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
  }
}
const labels = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My first Data",
      //backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0, 0,0)",
      data: [0, 15, 10, 30, 30, 20, 50, 58],
      borderWidth: 5,
      borderCapStyles: "round",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          borderColor: "black",
          borderWidth: 2,
          display: false,
        },
        ticks: {
          color: "black",
          font: {
            size: 15,
          },
        },
      },
      y: {
        grid: {
          borderColor: "black",
          borderWidth: 2,
          display: false,
        },
        ticks: {
          display: false,
        },
        title: {
          display: true,
          text: "Occupancy",
          font: {
            size: 20,
            family: "'Roboto', sans-serif",
            weight: "bold",
            lineHeight: 1,
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    animations: {
      tension: {
        duration: 2000,
        easing: "linear",
        from: 1,
        to: 0.3,
        loop: false,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
