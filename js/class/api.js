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
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => {
            if (response.status == 200) {
              //redireccion a dashboard
              let userToken = "Bearer "+response.token;
              localStorage.setItem('userToken', userToken);
              window.location.assign('/dashboard.html');
            } else if (response.status == 401) {
              console.log(response);
              swal({
                title: "Nombre de Usuario o Contraseña incorrecta",
                icon: "error",
                timer: 1500,
                button : false,
                });
              loginForm.reset();
              userName.focus();
            } else if (response.status == 400) {
              console.log(response);
              swal({
                title: "Usted no esta registrado",
                text: "Pongase en contacto con la empresa..",
                icon: "error",
                timer: 1500,
                button : false,
                });
              loginForm.reset();
              userName.focus();
            }
          });
      }
    });
  }
  logouth(){
    console.log("hola cerrar sesion")
    const logouthBtn = document.getElementById('logouthBtn');
    logouthBtn.addEventListener('click', () => {
      localStorage.removeItem('userToken');
      window.location.assign('/components/login.html');
    })
  }
}
