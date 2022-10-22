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

const graph = document.getElementsByClassName("graphContainer");

let graphContainer = new chart(graph, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "red",
        tension: 0.1,
      },
    ],
  },
});
