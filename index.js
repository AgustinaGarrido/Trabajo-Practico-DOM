const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
//constante
const pizzasIdInput = document.querySelector("#pizzasIdInput");
const button = document.querySelector("#button");
const contenedorCards = document.querySelector("#contenedorCards");

//Buscar
button.addEventListener("click",() => {
  const pizzaId = parseInt(pizzasIdInput.value);
  buscarPizza(pizzaId)
});

const buscarPizza = (pizzaId) => {
  const pizza = buscandoId(pizzaId);
  
  if(pizza){
    mostrarPizza(pizza);
    guardarUltimaPizza(pizzaId);
  } else {
    if(pizzasIdInput.value ==""){
      errorMensaje("Ingrese un numero");
    } else {
      errorMensaje("No esta disponible");
    }
  }
};

const buscandoId =(id) =>{
  return pizzas.find((pizza)=> pizza.id === id);
};

//mostrar card
const mostrarPizza=(pizza)=>  {
  contenedorCards.innerHTML = ` <div class="pizza-card">
      <h2 class="title">${pizza.nombre}</h2>
      <img class="imagen"src="${pizza.imagen}" alt="${pizza.nombre}">
      <p class="title">Precio: $${pizza.precio.toLocaleString()} ARS</p>
    </div>
  `;
};
//mostrarmsj
const errorMensaje=(mensaje) => {
  contenedorCards.innerHTML = `
    <P class="title">${mensaje}❌</P>
  `;
};
//guardado en LS
const guardarUltimaPizza=(pizzaId)=> {
  localStorage.setItem("UltimaPizza", JSON.stringify(pizzaId));
};