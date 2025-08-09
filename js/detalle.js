// Lista de productos con tabla de tallas, opiniones y cuidados
const productos = [
  //Abrigos  
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Carlos M.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Lucía G.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "img/abrigos/02.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 100,
        descripcion: "Abrigo ligero para días frescos.",
        tallas: ["S", "M", "L"],
        colores: ["Negro", "Rojo", "Azul"],
        cuidados: [
            "Lavar en lavadora con agua fría",
            "Secar al aire libre",
            "No planchar"
        ],
        opiniones: [
            { cliente: "Ana P.", comentario: "Es ligero pero bastante resistente. Me gustó." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 88, largo: 63, manga: 59 },
            { talla: "M", pecho: 93, largo: 65, manga: 60 },
            { talla: "L", pecho: 98, largo: 68, manga: 63 }
        ]
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "img/abrigos/03.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L"],
        colores: ["Negro", "Gris", "Azul"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Marcos M.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Roberto G.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 }
        ]
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "img/abrigos/04.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Mario P.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Mateo R.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "img/abrigos/05.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L"],
        colores: ["Negro", "Roja", "Verde"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Enoc G.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Ismael G.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 }
        ]
    },
    {
        id: "abrigo-06",
        titulo: "Abrigo 06",
        imagen: "img/abrigos/06.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L"],
        colores: ["Negro", "Gris", "Roja"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Josue P.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Nicolas T.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 }
        ]
    },
    {
        id: "abrigo-07",
        titulo: "Abrigo 07",
        imagen: "img/abrigos/07.jpg",
        categoria: { nombre: "Abrigos", id: "abrigos" },
        precio: 1000,
        descripcion: "Abrigo cálido para invierno.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja",
            "No usar secadora"
        ],
        opiniones: [
            { cliente: "Carlos M.", comentario: "Muy buen abrigo, abriga bastante y es cómodo." },
            { cliente: "Lucía G.", comentario: "El color es fiel a la imagen. Lo volvería a comprar." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
//Camisetas
{
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "img/camisetas/01.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "img/camisetas/02.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L"],
        colores: ["Negro", "Blanca"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 }
        ]
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "img/camisetas/03.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "img/camisetas/04.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "img/camisetas/05.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "img/camisetas/06.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "img/camisetas/07.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "img/camisetas/08.jpg",
        categoria: { nombre: "Camiseta", id: "camiseta" },
        precio: 1000,
        descripcion: "Camiseta casual para el verano.",
        tallas: ["S", "M", "L", "XL"],
        colores: ["Negro", "Gris", "Azul", "Rojo"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "S", pecho: 90, largo: 65, manga: 60 },
            { talla: "M", pecho: 95, largo: 67, manga: 61 },
            { talla: "L", pecho: 100, largo: 70, manga: 66 },
            { talla: "XL", pecho: 110, largo: 75, manga: 69 }
        ]
    },
//Pantalones
{
        id: "pantalon-01",
        titulo: "Pantalon 01",
        imagen: "img/camisetas/08.jpg",
        categoria: { nombre: "Pantalon", id: "pantalon" },
        precio: 1000,
        descripcion: "Pantalon casual de vestir.",
        tallas: ["30", "32", "34"],
        colores: ["Negro", "Blanco", "Azul", "Crema", "Gris",],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ],
        tablaTallas: [
            { talla: "30" },
            { talla: "32" },
            { talla: "34" }
            ]
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon 02",
        imagen: "img/pantalones/02.jpg",
        categoria: { nombre: "Pantalon", id: "pantalon" },
        precio: 1000,
        descripcion: "Pantalon casual de vestir.",
        tallas: ["30", "32", "34"],
        colores: ["Negro", "Blanco", "Azul", "Crema", "Gris",],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ]
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon 03",
        imagen: "img/pantalones/03.jpg",
        categoria: { nombre: "Pantalon", id: "pantalon" },
        precio: 1000,
        descripcion: "Pantalon casual de vestir.",
        tallas: ["30", "32", "34"],
        colores: ["Negro", "Azul", "Gris",],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ]
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon 04",
        imagen: "img/pantalones/04.jpg",
        categoria: { nombre: "Pantalon", id: "pantalon" },
        precio: 1000,
        descripcion: "Pantalon casual de vestir.",
        tallas: ["30", "32", "34"],
        colores: ["Negro", "Azul"],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ]
    },
    {
        id: "pantalon-05",
        titulo: "Pantalon 05",
        imagen: "img/pantalones/05.jpg",
        categoria: { nombre: "Pantalon", id: "pantalon" },
        precio: 1000,
        descripcion: "Pantalon casual de vestir.",
        tallas: ["30", "32", "34"],
        colores: ["Negro", "Blanco", "Azul", "Crema", "Gris",],
        cuidados: [
            "Lavar a mano con agua fría",
            "No usar blanqueador",
            "Planchar a temperatura baja"
        ],
        opiniones: [
            { cliente: "Pedro R.", comentario: "Muy buena camiseta, bastante fresca." },
            { cliente: "Juan C.", comentario: "Buena tela, igualita a la imagen." }
        ]
    },
];
// Obtener ID desde la URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Buscar el producto
const producto = productos.find(p => p.id === id);

// Mostrar detalles
if (producto) {
    const contenedor = document.getElementById("detalle-producto");
    contenedor.innerHTML = `
        <h1>${producto.titulo}</h1>
        <img src="${producto.imagen}" alt="${producto.titulo}" width="300">
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Tallas disponibles:</strong> ${producto.tallas.join(", ")}</p>
        <p><strong>Colores disponibles:</strong> ${producto.colores.join(", ")}</p>
    `;

    // Tabla de tallas
    const tablaContenedor = document.getElementById("tabla-tallas");
    if (producto.tablaTallas) {
        let tablaHTML = `
            <h3>Tabla de tallas</h3>
            <table border="1" cellpadding="5" cellspacing="0">
                <thead>
                    <tr>
                        <th>Talla</th>
                        <th>Pecho (cm)</th>
                        <th>Largo (cm)</th>
                        <th>Manga (cm)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        producto.tablaTallas.forEach(fila => {
            tablaHTML += `
                <tr>
                    <td>${fila.talla}</td>
                    <td>${fila.pecho}</td>
                    <td>${fila.largo}</td>
                    <td>${fila.manga}</td>
                </tr>
            `;
        });
        tablaHTML += `
                </tbody>
            </table>
        `;
        tablaContenedor.innerHTML = tablaHTML;
    } else {
        tablaContenedor.innerHTML = "<p>No hay tabla de tallas para este producto.</p>";
    }

    // Opiniones de clientes
    const opinionesContenedor = document.getElementById("opiniones");
    if (producto.opiniones && producto.opiniones.length > 0) {
        let opinionesHTML = "<h3>Opiniones de clientes</h3><ul>";
        producto.opiniones.forEach(op => {
            opinionesHTML += `<li><strong>${op.cliente}:</strong> ${op.comentario}</li>`;
        });
        opinionesHTML += "</ul>";
        opinionesContenedor.innerHTML = opinionesHTML;
    } else {
        opinionesContenedor.innerHTML = "<p>No hay opiniones para este producto.</p>";
    }

    // Cuidados del producto
    const cuidadosContenedor = document.getElementById("cuidados");
    if (producto.cuidados && producto.cuidados.length > 0) {
        let cuidadosHTML = "<h3>Cuidados del producto</h3><ul>";
        producto.cuidados.forEach(cuidado => {
            cuidadosHTML += `<li>${cuidado}</li>`;
        });
        cuidadosHTML += "</ul>";
        cuidadosContenedor.innerHTML = cuidadosHTML;
    } else {
        cuidadosContenedor.innerHTML = "<p>No hay instrucciones de cuidado para este producto.</p>";
    }

} else {
    document.getElementById("detalle-producto").innerHTML = "<p>Producto no encontrado.</p>";
}
if (producto) {
    const contenedor = document.getElementById("detalle-producto");
    contenedor.innerHTML = `
        <h1>${producto.titulo}</h1>
        <img src="${producto.imagen}" alt="${producto.titulo}">
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        <p><strong>Colores:</strong> ${producto.colores.join(", ")}</p>
    `;

    // Tabla de Tallas (si existe)
    if (Array.isArray(producto.tablaTallas) && producto.tablaTallas.length > 0) {
    detalleHTML += `
        <section id="tabla-tallas">
            <h3>Tabla de Tallas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Talla</th>
                        <th>Cintura (cm)</th>
                        <th>Cadera (cm)</th>
                        <th>Largo Pierna (cm)</th>
                        <th>Largo Short (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    ${producto.tablaTallas.map(talla => `
                        <tr>
                            <td>${talla.talla}</td>
                            <td>${talla.cintura}</td>
                            <td>${talla.cadera}</td>
                            <td>${talla.largoPierna}</td>
                            <td>${talla.largoShort}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </section>
    `;
}

        tablaHTML += `
                </tbody>
            </table>
        `;

        contenedorTallas.innerHTML = tablaHTML;
    }

    // Opiniones de clientes
    if (producto.opiniones && producto.opiniones.length > 0) {
        const contenedorOpiniones = document.getElementById("opiniones");
        let opinionesHTML = `<h3>Opiniones de Clientes</h3>`;
        producto.opiniones.forEach(op => {
            opinionesHTML += `
                <div class="review">
                    <strong>⭐⭐⭐⭐⭐</strong> ${op.comentario} - <em>${op.cliente}</em>
                </div>
            `;
        });
        contenedorOpiniones.innerHTML = opinionesHTML;
    }

    // Cuidados del producto
    if (producto.cuidados && producto.cuidados.length > 0) {
        const contenedorCuidados = document.getElementById("cuidados");
        let cuidadosHTML = `<h3>Materiales y Cuidados</h3><ul>`;
        producto.cuidados.forEach(cuidado => {
            cuidadosHTML += `<li>${cuidado}</li>`;
        });
        cuidadosHTML += `</ul>`;
        contenedorCuidados.innerHTML = cuidadosHTML;
    }

 else {
    document.getElementById("detalle-producto").innerHTML = "<p>Producto no encontrado.</p>";
}