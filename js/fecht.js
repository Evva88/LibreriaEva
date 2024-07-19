fetch('./js/libros.json') // Ruta relativa al archivo JSON
  .then(response => response.json())
  .then(data => {
    let html = '';
    data.forEach(libro => {
      html += `
        <div class="col-md-3 mb-3">
          <div class="card">
            <img src="${libro.img}" class="card-img-top" alt="${libro.nombre}">
            <div class="card-body">
              <h5 class="card-title">${libro.nombre}</h5>
              <p class="card-text">Autor: ${libro.autor}</p>
              <p class="card-text">Género: ${libro.genero}</p>
              <p class="card-text">Editorial: ${libro.editorial}</p>
              <p class="card-text">Cantidad de libros: ${libro['cantidad de libros']}</p>
            </div>
          </div>
        </div>`;
    });
    // Insertar el HTML generado dentro del contenedor #libros
    document.getElementById('libros').innerHTML = html;
  })
  .catch(error => console.error('Error al cargar los libros:', error));

