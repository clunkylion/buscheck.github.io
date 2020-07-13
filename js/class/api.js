export default class API {
    login(){
        let data = {
            username: "esteban",
	        password: "tebi123"
        }
        fetch('http://157.245.186.141/api/loginWeb/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: data
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
}