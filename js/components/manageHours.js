const manageHours = document.getElementById('manageHoursBtn');
manageHours.addEventListener('click', ()=> {
    fetch('/components/manageHours.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
});