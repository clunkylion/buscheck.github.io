export default class API {
  login() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.getElementById("userName");
      const password = document.getElementById("password");
      const alertUser = document.getElementById("alertUser");
      const alertPassword = document.getElementById("alertPassword");
      if (userName.value === "") {
        alertUser.innerHTML = "Debe ingresar su nombre de Usuario";
        userName.focus();
        return false;
      } else if (password.value === "") {
        alertPassword.innerHTML = "Debe ingresar la contraseña";
        password.focus();
        return false;
      } else {
        let data = {
          username: userName.value,
          password: password.value,
        };
        fetch("http://157.245.186.141/api/loginWeb/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            if (response.status == 200) {
              //redireccion a dashboard
              console.log("Datos Correctos");
              console.log(response);
            } else {
                console.log(response);
                console.log('Datos Incorrectos o no existen')
              loginForm.reset();
            }
          });
      }
    });
  }
}
