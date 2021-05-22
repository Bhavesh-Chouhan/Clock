setInterval(() => {
  let getDate = new Date();
  let currentTime = getDate.toLocaleTimeString();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let currentDate = getDate.toLocaleDateString(undefined, options);
  document.getElementById(
    "time"
  ).innerHTML = `${currentTime}  <br /> on ${currentDate}`;
}, 1000);
