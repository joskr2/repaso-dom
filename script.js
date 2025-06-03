// @ts-nocheck
// Asegurarse de que el DOM está cargado
document.addEventListener("DOMContentLoaded", () => {
  // 1. getElementById
  // Selecciona el elemento con id="tituloPrincipal"
  const titulo = document.getElementById("tituloPrincipal");
  // 'titulo' ahora es el objeto elemento H1
  if (titulo) {
    // Siempre es buena práctica verificar si el elemento fue encontrado
    console.log("getElementById('tituloPrincipal'):", titulo);
    // Podemos acceder a sus propiedades, por ejemplo, su texto
    console.log("Texto del título:", titulo.textContent);
  } else {
    console.log("Elemento con id 'tituloPrincipal' no encontrado.");
  }

  // 2. getElementsByTagName
  // Selecciona todos los elementos <p>
  const todosLosParrafos = document.getElementsByTagName("p");// Array from convierte a una colleccion de algo(elementos html) en un array , para por ejemplo usar los metodos que vienen en los arrays
		const arrayDesdeTodosLosParrafos = Array.from(todosLosParrafos);

  for (const parrafo of arrayDesdeTodosLosParrafos) {
    console.log(parrafo);
  }

  // 'todosLosParrafos' es una HTMLCollection
  console.log("\ngetElementsByTagName('p'):", todosLosParrafos);
  console.log("Número de párrafos:", todosLosParrafos.length); // Debería ser 3

  // Para iterar sobre una HTMLCollection, un bucle for tradicional es común:
  for (let i = 0; i < todosLosParrafos.length; i++) {
    console.log(`Párrafo ${i}:`, todosLosParrafos[i].textContent);
  }
  // O convertirla a array para usar forEach:
  // Array.from(todosLosParrafos).forEach(p => console.log(p.textContent));

  // 3. getElementsByClassName
  // Selecciona todos los elementos con la clase "importante"
  const elementosImportantes = document.getElementsByClassName("importante");
  // 'elementosImportantes' es una HTMLCollection
  console.log("\ngetElementsByClassName('importante'):", elementosImportantes); // Debería encontrar 2 elementos
  // El segundo párrafo y el segundo ítem de la lista

  // 4. querySelector
  // Selecciona el PRIMER elemento que coincida con el selector CSS

  // Seleccionar el primer párrafo (etiqueta 'p')
  const primerParrafo = document.querySelector("p");
  console.log("\nquerySelector('p'):", primerParrafo.textContent); // "Este es el primer párrafo."

  // Seleccionar el primer elemento con la clase "boton-accion"
  const primerBotonAccion = document.querySelector(".boton-accion");
  console.log("querySelector('.boton-accion'):", primerBotonAccion.textContent); // "Acción 1"

  // Seleccionar el li con clase "importante" dentro de la ul con id "listaItems"
  const itemImportanteEnLista = document.querySelector(
    "#listaItems li.importante"
  );
  console.log(
    "querySelector('#listaItems li.importante'):",
    itemImportanteEnLista.textContent
  ); // "Ítem 2 (importante)"

  // Si un selector no encuentra nada, querySelector devuelve null
  const noExiste = document.querySelector(".clase-inexistente");
  console.log("querySelector('.clase-inexistente'):", noExiste); // null

  // 5. querySelectorAll
  // Selecciona TODOS los elementos que coincidan con el selector CSS

  // Seleccionar todos los párrafos con clase "parrafo"
  const parrafosConClase = document.querySelectorAll("p.parrafo");
  // 'parrafosConClase' es una NodeList
  console.log("\nquerySelectorAll('p.parrafo'):", parrafosConClase); // Debería encontrar 2
  // NodeList tiene forEach directamente:
  parrafosConClase.forEach((parrafo, index) => {
    console.log(`@@Párrafo con clase ${index}:`, parrafo.textContent);
  });

  // Seleccionar todos los botones con clase "boton-accion"
  const todosBotonesAccion = document.querySelectorAll(".boton-accion");
  console.log("querySelectorAll('.boton-accion'):", todosBotonesAccion); // Debería encontrar 2
  // biome-ignore lint/complexity/noForEach: <explanation>
  todosBotonesAccion.forEach((boton) => {
    console.log("Botón de acción:", boton.textContent);
  });
});


// 1. Modificar el titulo de la pagina , y que sea de color verde 
// 2. quiero que el fondo de la pagian cambie al color yellow

// 3. quiero que el tercer item : Item 3 , lo coloque de color azul y le aumente el tamanho de letra 
