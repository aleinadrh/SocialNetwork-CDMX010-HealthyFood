// aqui exportaras las funciones que necesites

export function bienvenida(target){
    const html=`
            <img src="logo.png">
            <h2>¡Bienvenidos!</h2>
            <div id="dates">
            <h1>Inspirate y cocina con HealthyFood</h1>
            <p> Reinventa tu estilo de vida, descubre nuevas opciones para mantener tu alimentación en equilibrio "No solo se vive de ensaladas" 
            <br><br>
            Comparte todos tus conocimientos con el resto del mundo, ya sea con tus recetas o experiencia y transforma tu vida.
           <br><br> 
           Recetas saludables cuando y donde tú quieras, eso es HealthyFood.
            <br><br>
            <button type="submit" class="btn btn-outline-success" id="home">Comenzemos</button>
            </div>`
  
          target.innerHTML= html;
  
    const entry= document.getElementById('home');
  
      entry.addEventListener('click', function (){
      location.href= '/logIn'
      });
          
  };