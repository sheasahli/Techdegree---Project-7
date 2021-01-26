const emailToggle = document.querySelector('.email-toggle input');
const profileToggle = document.querySelector(".profile-toggle input");

const toggleOn = document.querySelector(".on");
const slider = document.querySelector('.slider')
const alertBanner = document.getElementById("alert");

const traficCanvas = document.querySelector("#trafic-chart");
const dailyCanvas = document.getElementById("dailyCanvas");
const mobileCanvas = document.getElementById("mobile-chart");
const alertBanner = document.getElementById('alert');

/*----- Alert -----*/

alertBanner.innerHTML =
`
  <div class="alertBanner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-close">x</p>
  </div>
  `;

  alertBanner.addEventListener('click', e => {
    if(e.target.className === 'alert-close'){
      alertBanner.style.display = "none";
    }
  });

  const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [500, 1000,1500, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

    let trafficOptions = {
      aspectRatio: 2.5,
      animation: {
      duration: 0
      },
      scales: {
      yAxes: [{
      ticks: {
      beginAtZero:true
      }
      }]
      },
      legend : {
      display: false
      }
      };

      let trafficChart = new Chart(traficCanvas, {
        type: 'line',
        data:trafficData ,
        options: trafficOptions
        });


  const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });



      const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
        }]
        };

  const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });
    const user = document.getElementById("user-field");
    const message = document.getElementById("message-field");
    const send = document.querySelector(".send");
  send.addEventListener("click", () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
      alert("Please fill out user and message fields before sending");
      } else if (user.value === "" ) {
      alert("Please fill out user field before sending");
      } else if (message.value === "" ) {
      alert("Please fill out message field before sending");
      } else {
      alert(`Message successfully sent to: ${user.value}`);
      }
  });

  // emailToggle.addEventListener('click', () =>  {
  //   if (emailToggle.checked) {
  //     toggleOff[0].style.display = 'none';
  //   } else {
  //     toggleOff[0].style.display = '';
  //   }
  // });
  slider.addEventListener("click", () => {

          toggleOn.style.display = "";
      }
  );
