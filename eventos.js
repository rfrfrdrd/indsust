const boton = document.getElementById('boton');
const informacion = document.getElementById('informacion');

boton.addEventListener('click', function() {
  if (informacion.classList.contains('oculto')) {
    informacion.classList.remove('oculto');
    boton.classList.add('clicked');
    boton.textContent = 'Ocultar información';
  } else {
    informacion.classList.add('oculto');
    boton.classList.remove('clicked');
    boton.textContent = 'Sector Agropecuario';
  }
});
