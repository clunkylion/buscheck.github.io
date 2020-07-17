const manageBuses = document.getElementById('manageBusesBtn');
manageBuses.addEventListener('click', () => {
    fetch('/components/manageBuses.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
})