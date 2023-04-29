var url = "https://digimon-api.vercel.app/api/digimon"

var contenido = document.querySelector("#contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)

    for (item of datos){

    contenido.innerHTML += `

    <div class="tarjeta">
        <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.level}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>    
    `

}

})

.catch(error => {
  console.error(`${error.message}`);
});
$("#busqueda").on("keyup", function() {

    var value = $(this).val().toLowerCase();

    $("div").filter(function() {

      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    });

  })
window.onload = function () {
  // Variables
  const IMAGENES = [
      'img/img-1.jpg', 
      'img/img-2.jpg',
      'img/img-3.jpg',
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');
  let $imagen = document.querySelector('#imagen');
  let $botonPlay = document.querySelector('#play');
  let $botonStop = document.querySelector('#stop');
  let intervalo;

  // Funciones

  /**
   * Funcion que cambia la foto en la siguiente posicion
   */
  function pasarFoto() {
      if(posicionActual >= IMAGENES.length - 1) {
          posicionActual = 0;
      } else {
          posicionActual++;
      }
      renderizarImagen();
  }

  /**
   * Funcion que cambia la foto en la anterior posicion
   */
  function retrocederFoto() {
      if(posicionActual <= 0) {
          posicionActual = IMAGENES.length - 1;
      } else {
          posicionActual--;
      }
      renderizarImagen();
  }

  /**
   * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
   */
  function renderizarImagen () {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  /**
   * Activa el autoplay de la imagen
   */
  function playIntervalo() {
      intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      // Desactivamos los botones de control
      $botonPrevius.setAttribute('disabled', true);
      $botonNext.setAttribute('disabled', true);
      $botonPlay.setAttribute('disabled', true);
      $botonStop.removeAttribute('disabled');

  }

  /**
   * Para el autoplay de la imagen
   */
  function stopIntervalo() {
      clearInterval(intervalo);
      // Activamos los botones de control
      $botonAvanzar.removeAttribute('disabled');
      $botonRetroceder.removeAttribute('disabled');
      $botonPlay.removeAttribute('disabled');
      $botonStop.setAttribute('disabled', true);
  }

  // Eventos
  $botonNext.addEventListener('click', pasarFoto);
  $botonPrevius.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);
  // Iniciar
  renderizarImagen();
}
fetch(url)
.then(response => response.json()
)
.then(datos => {
    //console.log(datos)
    //console.log(datos[0].title)

    var contenido = document.querySelector("#contenido")

    contenido.innerHTML = ""

    for (item of datos){
        //console.log(item)

        contenido.innerHTML += `
        <tr>
            <th scope="row">${item.userId}</th>
            <td>${item.name}</td>
            <td> <img src="${item.img}class="list-img-top" alt="imagen" width="20px" height="20px"</td>
            <td>${item.level}</td>
        </tr>
                
        `
        if (item.userId == 10) { break;}
    }
})

