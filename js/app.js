
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
