//left side nav bar
//Date
var dateToday = new Date();
var dd = dateToday.getDate();
var mm = dateToday.getMonth() + 1;
var yyyy = dateToday.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
dateToday = dd + "." + mm + "." + yyyy;
console.log(dateToday);
document.getElementById("date").innerHTML = dateToday;

//Time
function time() {
  var timeToday = new Date();
  var hh = timeToday.getHours();
  var mm = timeToday.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  timeToday = hh + ":" + mm;
  console.log(timeToday);
  document.getElementById("time").innerHTML = timeToday;
}

setInterval(time, 1000);

var modal = document.getElementById("myModal");

// Get the button that opens the modal (HOT, NOT)
var btn = document.getElementsByClassName("poll-vote-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn[0].onclick = function () {
  modal.style.display = "block";
};
btn[1].onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modalSec = document.getElementById("myModalSec");
// Get the button that opens the modal (last week poll)
var btnSec = document.getElementById("last-week-poll");
// Get the <span> element that closes the modal
var spanSec = document.getElementsByClassName("closeSec");

btnSec.onClick = function () {
  modalSec.style.display = "block";
};

spanSec.onclick = function () {
  modalSec.style.display = "none";
};

//pie chart on the modal
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["HOT", "NOT"],
    datasets: [
      {
        label: "# of Votes",
        data: [69, 32],
        backgroundColor: ["#10828c", "#eba10c"],
        borderColor: ["#10828c", "#eba10c"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",

        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          boxWidth: 40,
          boxHeight: 40,
          borderRadius: 15,
          padding: 50,
          color: "black",
          font: {
            size: 30,
            family: "'Roboto', sans-serif",
            lineHeight: 1,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        align: "center",
        color: "white",
        font: {
          size: 25,
          family: "'Roboto', sans-serif",
          weight: "bold",
          lineHeight: 1,
        },
        formatter: (value, context) => {
          const datapoints = context.chart.config.data.datasets[0].data;
          function totalSum(total, datapoint) {
            return total + datapoint;
          }
          const totalValue = datapoints.reduce(totalSum, 0);
          const percentageValue = ((value / totalValue) * 100).toFixed(1);
          return `${percentageValue}%`;
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});
