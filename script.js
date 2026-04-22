import { pulseras } from "./data.mjs";

const btnVentas = document.getElementById("btn-ventas");
const btnLogo = document.getElementById("btn-logo");
const contenedor = document.getElementById("contenedor-productos");
const titulo = document.getElementById("titulo-seccion");
const subtitulo = document.getElementById("subtitulo-seccion");


async function cargarVentas() {
    titulo.textContent = "Ventas Especiales";
    subtitulo.textContent = "Artículos importados directamente desde el servidor (API).";
    contenedor.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center;'>Cargando ... ⏳</h3>";

    try {
        
        const respuesta = await fetch("https://fakestoreapi.com/products?limit=6");
        const data = await respuesta.json();
        
        contenedor.innerHTML = ""; 
        
        data.forEach(item => {
            contenedor.innerHTML += `
                <div class="product-card">
                    <div class="img-container">
                        <img src="${item.image}" alt="Producto" class="product-img">
                    </div>
                    <div class="card-body">
                        <h3 title="${item.title}">${item.title.substring(0, 20)}...</h3>
                        <span class="price">$${item.price}</span>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        contenedor.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center; color: red;'>Hubo un error cargando las ventas.</h3>";
        console.error("Error API:", error);
    }
}

function cargarCatalogo() {
    titulo.textContent = "Paz Pulseras - Catálogo";
    subtitulo.textContent = "Nuestra colección para tu estilo.";
    contenedor.innerHTML = "";
    
    pulseras.forEach(p => {
        contenedor.innerHTML += `
            <div class="product-card">
                <div class="img-container">
                    <img src="${p.image}" alt="${p.title}" class="product-img">
                </div>
                <div class="card-body">
                    <h3>${p.title}</h3>
                    <span class="price">${p.price}</span>
                </div>
            </div>
        `;
    });
}

btnVentas.addEventListener("click", cargarVentas);
btnLogo.addEventListener("click", cargarCatalogo);