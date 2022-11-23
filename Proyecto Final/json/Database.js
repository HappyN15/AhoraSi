const miForm = document.querySelector('#miForm')


const procesaTodo = () => {
  event.preventDefault();
  const datos = new FormData(event.target);
  const datosCompletos = Object.fromEntries(datos.entries());
  console.log(datosCompletos);

}