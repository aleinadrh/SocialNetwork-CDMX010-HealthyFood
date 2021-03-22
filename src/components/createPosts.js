// vista con cuadrito de text area y boton de publicar
export function createPosts(target){
    const usuarioActivo=localStorage.getItem("usuarioActivo");
    const html = `<div>
    <img src="logo.png">
    <h1>Nombre de la receta</h1>
     <input type="text" id="nombre"><br>
     <h1>Ingredientes</h1>
     <textarea id="ingredientes"></textarea><br>
     <h1>Preparación</h1>
     <textarea id="preparacion"></textarea><br>
     <button id="postear">Postear<button>
  </div>`
 
             target.innerHTML = html
 
             const btnPost= document.getElementById('postear');
             const txtNombre= document.getElementById('nombre');
             const txtIngredientes= document.getElementById('ingredientes');
             const txtPreparacion= document.getElementById('preparacion');
     let postsActuales = JSON.parse(localStorage.getItem(`publicaciones-${usuarioActivo}`))
     if(postsActuales == null) {
        postsActuales = [];
      }
             btnPost.addEventListener('click', function (e){
                 e.preventDefault();
                 let muro= [...postsActuales,
                     {
                         nombre: txtNombre.value,
                         ingredientes: txtIngredientes.value,
                         preparacion: txtPreparacion.value,
                     }
                 ]
                 localStorage.setItem(`publicaciones-${usuarioActivo}`, JSON.stringify (muro))
                 location.href='/posts'
             });
 
 };