const dashboard = document.querySelector('.dashboardBtn');
dashboard.addEventListener('click', () => {
    fetch('/components/dashboard.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
})
const dashboardLi = document.getElementById('dashboardBtn');
dashboardLi.addEventListener('click', () => {
    debugger
    fetch('/components/dashboard.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
})