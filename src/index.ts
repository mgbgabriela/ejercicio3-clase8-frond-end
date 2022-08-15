let lista = document.getElementById("lista");
let tarea = document.getElementById("tarea");
let btnAgregar =document.getElementById("agregar");

const agregarTarea =() =>{
  lista?.innerHTML += `<li> ${tarea.value}</li>`
  
}

btnAgregar?.addEventListener("click", agregarTarea);
