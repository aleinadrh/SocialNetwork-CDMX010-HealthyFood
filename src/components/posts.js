// leer los post de local storage
// import {onNavigate} from './main.js'

export function posts (target) {
    const usuarioActivo=localStorage.getItem("usuarioActivo");
    console.log("mostrando muro");
    const template = `<div>
    <img src="logo.png">
    <div id="listaRecetas">
    </div>
     <button id="postear">Postear<button>
  </div>`;
            
           target.innerHTML = template
    
      //
    const boton = document.getElementById('postear');
    
    boton.addEventListener('click',()=>{
        console.log("hola");
    location.href= '/createPosts'
    });

    const listaRecetasUI = document.getElementById('listaRecetas');
let arrayActividades = [];


const PintarDB = () => {
    console.log("pintando");
    listaRecetasUI.innerHTML = '';

  arrayActividades = JSON.parse(localStorage.getItem(`publicaciones-${usuarioActivo}`));

  if(arrayActividades === null){
    arrayActividades = [];
  }else{

    arrayActividades.forEach(element => {

    listaRecetasUI.innerHTML += `
    <div id="${element.nombre}">
    Nombre: <span>${element.nombre}</span><br>
    Ingredientes: <span>${element.ingredientes}</span><br>
    Preparacion: <span>${element.preparacion}</span><br>
    <i class="material-icons">create</i>
     <i class="material-icons">delete</i>
     </div>`
    });
  }
  
}

const GuardarDB = () => {

    localStorage.setItem(`publicaciones-${usuarioActivo}`, JSON.stringify(arrayActividades));
  
    PintarDB();
  
  }

const EliminarDB = (actividad) => {
  let indexArray;
  arrayActividades.forEach((elemento, index) => {
    
    if(elemento.nombre === actividad){
      indexArray = index;
    }
    
  });

  arrayActividades.splice(indexArray,1);
  GuardarDB();

}

const EditarDB = (actividad) => {

  let indexArray = arrayActividades.findIndex((elemento)=>elemento.nombre === actividad);
  const element = arrayActividades[indexArray];
  const midiv = document.getElementById(actividad);
  midiv.innerHTML = `
  Nombre: <textarea>${element.nombre}</textarea>
    Ingredientes: <textarea>${element.ingredientes}</textarea>
    Preparacion: <textarea>${element.preparacion}</textarea><br>
     <i class="material-icons">save</i></
     
     `
}

const ActualizarDB = (actividad) => {

    let indexArray = arrayActividades.findIndex((elemento)=>elemento.nombre === actividad);
    const element = arrayActividades[indexArray];
    const midiv = document.getElementById(actividad);
    console.log(midiv.childNodes);
    const nombre=midiv.childNodes[1].value;
    const ingredientes=midiv.childNodes[3].value;
    const preparacion=midiv.childNodes[5].value;
    console.log(nombre);
    console.log(ingredientes);
    console.log(preparacion);
    element.nombre=nombre;
    element.ingredientes=ingredientes;
    element.preparacion=preparacion;
    console.log(arrayActividades);
    GuardarDB();
  
  }




// EventListener

document.addEventListener('DOMContentLoaded', PintarDB);

listaRecetasUI.addEventListener('click', (e) => {

  e.preventDefault();

  if(e.target.innerHTML === 'create' || e.target.innerHTML === 'delete'  || e.target.innerHTML === 'save'){
    let texto = e.path[2].childNodes[1].childNodes[1].innerHTML;
    console.log(texto);
    if(e.target.innerHTML === 'delete'){
      // Accción de eliminar
      EliminarDB(texto);
    }
    if(e.target.innerHTML === 'create'){
      // Accción de editar
      EditarDB(texto);
    }
    if(e.target.innerHTML === 'save'){
        // Accción de editar
        ActualizarDB(texto);
      }
  }

});
};
