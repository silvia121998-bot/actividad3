let productos = [];
let editando = null;

function guardarProducto(){

let imagen = document.getElementById("imagen").value;
let titulo = document.getElementById("titulo").value;
let descripcion = document.getElementById("descripcion").value;
let valor = parseFloat(document.getElementById("valor").value);
let cupon = document.getElementById("cupon").value;

// VALIDACIÓN
if(!imagen || !titulo || !descripcion || !valor){
alert("Todos los campos son obligatorios");
return;
}

// CUPÓN
if(cupon === "DESC50"){
valor = valor * 0.5;
}

// CREAR OBJETO
let producto = { imagen, titulo, descripcion, valor };

// EDITAR O CREAR
if(editando !== null){
productos[editando] = producto;
editando = null;
}else{
productos.push(producto);
}

limpiarFormulario();
renderProductos();
}

// MOSTRAR PRODUCTOS
function renderProductos(){

let lista = document.getElementById("lista");
lista.innerHTML = "";

productos.forEach((p,index)=>{

lista.innerHTML += `
<div class="producto">
<img src="${p.imagen}">
<div>
<h3>${p.titulo}</h3>
<p>${p.descripcion}</p>
<strong>$ ${p.valor.toLocaleString()}</strong>

<div class="botones">
<button onclick="editar(${index})">Editar</button>
<button onclick="eliminar(${index})">Eliminar</button>
</div>

</div>
</div>
`;

});

document.getElementById("contador").textContent =
productos.length + " productos";
}

// ELIMINAR
function eliminar(index){
productos.splice(index,1);
renderProductos();
}

// EDITAR
function editar(index){

let p = productos[index];

document.getElementById("imagen").value = p.imagen;
document.getElementById("titulo").value = p.titulo;
document.getElementById("descripcion").value = p.descripcion;
document.getElementById("valor").value = p.valor;

editando = index;
}

// LIMPIAR
function limpiarFormulario(){

document.getElementById("imagen").value="";
document.getElementById("titulo").value="";
document.getElementById("descripcion").value="";
document.getElementById("valor").value="";
document.getElementById("cupon").value="";
}