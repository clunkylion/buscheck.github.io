const sales = document.getElementById('salesBtn');
sales.addEventListener('click',() => {
    fetch('/components/sales.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
})