//
export function sesion (target){
    const html= `<div id="admin">

                 <img src="logo.png">
                 <h1>Inicia Sesión</h1>
                 <form class="form" id="form">
                 <h4>Correo electrónico</h4>
                 <input type="email" class="form-control" id="useremail" placeholder="Ej: usuario@gmail.com" required>
                 <h4>Contraseña</h4>
                 <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña:" required>
                 <br><br>
                 <button type="submit" class="btn btn-outline-success" id=btnSesion>Iniciar</button>
                 <br><br>
                 <h4>¿No tienes una cuenta?</h4>
                 <h5 id="register">Registrate</h5>
                 
                 </div>`

 
          target.innerHTML= html;
                  
    const btn= document.getElementById('btnSesion');
    const useremail= document.getElementById('useremail');
    const password= document.getElementById('password');
    const register= document.getElementById('register');
 
     let currentUsers= JSON.parse(localStorage.getItem('text'));

         btn.addEventListener('click', function (e){
           e.preventDefault();
           for(let i of currentUsers){

            if(i.correo==useremail.value && i.contraseña==password.value){
               console.log("si encontre usuario");
               localStorage.setItem("usuarioActivo",useremail.value);
               location.href='/posts'
               return;
       
            }
           } 
       
           alert("usuario y contraseña no coinciden");
          
         }); 
 
         register.addEventListener('click', function (e){
             e.preventDefault();
             location.href= '/signUp'
         });
 
 };