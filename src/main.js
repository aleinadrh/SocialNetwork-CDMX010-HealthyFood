//
import {bienvenida} from './components/welcome.js'
import {sesion} from './components/logIn.js'
import {newusers} from './components/singUp.js'
import {posts} from './components/posts.js'
import {createPosts} from './components/createPosts.js'


const appElement =document.getElementById('app')

// router
const routes = {
    '/' : bienvenida,
    '/logIn' : sesion,
    '/signUp' : newusers,
    '/posts' : posts,
    '/createPosts' : createPosts,
  };
console.log(window.location.pathname);
const welcomeComponent = routes[window.location.pathname];
welcomeComponent(appElement)

  function onNavigate(pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )

    const component = routes[pathname] 
    component(appElement)
  }

// sesion.addEventListener('click',()=>{
//   onNavigate('/posts')
//   // el nodo padre se llama urls y el nodo hijo sesion
//   // borrar el elmento con el id sesion y crear 2 elementos hijos, uno para cerrar sesion y otro para crear post 
//   // borras con un remove child
//   // creas elementos con appenChild
// })