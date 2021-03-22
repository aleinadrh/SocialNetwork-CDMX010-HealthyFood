//
export function newusers (target ){
    const html= `<div id="account">
                
                 <form class="" id="">
                 <img src="logo.png">
                 <h4>Registrate</h4>
                 <p>Ingrese algunos datos para continuar.</p>
                 <h4>Usuario</h4>
                 <input type="text" class="form-control" id="newUser" placeholder="Ej: HealthyLover" required>
                 <h4>Correo electrónico</h4>
                 <input type="email" class="form-control" id="newEmail" placeholder="Ej: usuario@gmail.com" required>
                 <h4>Contraseña</h4>
                 <input type="password" class="form-control" id="newPassword" placeholder="Crea una contraseña:" required>
                 <p>Tiene buena pinta :) </p>
                 <button type="submit" class="btn btn-outline-success" id=btnRegister>Registrar</button>
                 <p>¿Ya tienes una cuenta?</p>
                 <h5 id="sesionUser">Iniciar sesión</h5>
                 </div>
                 `

            target.innerHTML= html;

  const btnAccount= document.getElementById('btnRegister');
  const newUser= document.getElementById('newUser');
  const newEmail= document.getElementById ('newEmail');
  const newPassword= document.getElementById ('newPassword');
  const sesionUser= document.getElementById('sesionUser');

    let currentRecords= JSON.parse(localStorage.getItem('text'));
         if(currentRecords == null) {
           currentRecords = [];
         }
            btnAccount.addEventListener('click', function (e){
             e.preventDefault();
            let registration= [...currentRecords,
              {
                 usuario: newUser.value,
                 correo: newEmail.value,
                 contraseña: newPassword.value,
              }
            ];
              localStorage.setItem('text', JSON.stringify(registration));
              localStorage.setItem("usuarioActivo", newEmail.value);
              location.href='/posts'
          }); 

          sesionUser.addEventListener('click', function (e){
              e.preventDefault();
              location.href= '/logIn'
          });

};