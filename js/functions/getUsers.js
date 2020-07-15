document.addEventListener("DOMContentLoaded", () => {
    let token = localStorage.getItem('userToken')
    let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', token )
    fetch('https://api-buscheck.herokuapp.com/api/user',{
        method: "GET",
        headers: headers,
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((result) => console.log(result))
});
