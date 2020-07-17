const manageUsers = document.getElementById('manageUsersBtn');
manageUsers.addEventListener('click', ()=> {
    fetch('/components/manageUsers.html')
    .then(r => {return r.text()})
    .then((data) => {
        document.getElementById('dashboard').innerHTML = data
    })
});