const agregar = document.getElementById('agregar');
const guardar = document.getElementById('guardar');

//Render de las imagenes previas
const agregImagen = document.getElementById('agreg-imagen');
const cargarImagen = document.getElementById('cargar-imagen');


const picture = [];

cargarImagen.addEventListener("change", () => {
  const archivos = cargarImagen.files;

  if (!archivos || !archivos.length) {
    agregImagen.src = "";
    return;
  }
  const firstArch = archivos[0];
  const objectURL = URL.createObjectURL(firstArch);
  agregImagen.src = objectURL;

  picture.push(objectURL);

});

const nuevoProducto = {
  nomb: agregar.nombre.value,
  marc: agregar.marca.value,
  pres: agregar.presentac.value,
  cat: agregar.categoria.value,
  prec: parseFloat(agregar.precio.value),
  cant: parseFloat(agregar.cantidad.value),
  imagen: {
    img: picture,
  }
};


guardar.addEventListener('click', () => {
  const producto = [];

  producto.push(nuevoProducto);

  for (let iterPro of producto) {
    console.log(iterPro);
  };
})