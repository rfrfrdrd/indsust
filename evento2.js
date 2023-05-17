/*const boton1 = document.getElementById('boton1');
const informacion1 = document.getElementById('informacion1');
const boton2 = document.getElementById('boton2');
const informacion2 = document.getElementById('informacion2');

boton1.addEventListener('click', function() {
  if (informacion1.classList.contains('oculto')) {
    informacion1.classList.remove('oculto');
    boton1.classList.add('clicked');
    boton1.textContent = 'Ocultar información';
    boton2.style.marginTop = informacion1.offsetHeight + 'px';
  } else {
    informacion1.classList.add('oculto');
    boton1.classList.remove('clicked');
    boton1.textContent = 'Sector Agropecuario';
    boton2.style.marginTop = '0';
  }
});

boton2.addEventListener('click', function() {
  if (informacion2.classList.contains('oculto')) {
    informacion2.classList.remove('oculto');
    boton2.classList.add('clicked');
    boton2.textContent = 'Ocultar información';
    boton1.style.marginTop = informacion2.offsetHeight + 'px';
  } else {
    informacion2.classList.add('oculto');
    boton2.classList.remove('clicked');
    boton2.textContent = 'Mostrar información';
    boton1.style.marginTop = '0';
  }
});
*/


const boton1 = document.getElementById('boton1');
const informacion1 = document.getElementById('informacion1');
const boton2 = document.getElementById('boton2');
const informacion2 = document.getElementById('informacion2');
const boton3 = document.getElementById('boton3');
const informacion3 = document.getElementById('informacion3');
const boton4 = document.getElementById('boton4');
const informacion4 = document.getElementById('informacion4');
const boton5 = document.getElementById('boton5');
const informacion5 = document.getElementById('informacion5');

boton1.addEventListener('click', function() {
    if (informacion1.classList.contains('oculto')) {
      informacion1.classList.remove('oculto');
      boton1.classList.add('clicked');
      informacion2.style.marginTop = '0';
    } else {
      informacion1.classList.add('oculto');
      boton1.classList.remove('clicked');
      boton1.style.marginBottom = '0';
      boton2.style.marginTop = '0';
    }
  });
  

boton2.addEventListener('click', function() {
  if (informacion2.classList.contains('oculto')) {
    informacion2.classList.remove('oculto');
    boton2.classList.add('clicked');
    informacion1.style.marginTop = '0';
    boton1.style.marginTop = '0';
  } else {
    informacion2.classList.add('oculto');
    boton2.classList.remove('clicked');
    boton2.style.marginBottom = '0';
  }
});

boton3.addEventListener('click', function() {
    if (informacion3.classList.contains('oculto')) {
      informacion3.classList.remove('oculto');
      boton3.classList.add('clicked');
      informacion3.style.marginTop = '0';
      boton3.style.marginTop = '0';
    } else {
      informacion3.classList.add('oculto');
      boton3.classList.remove('clicked');
      boton3.style.marginBottom = '0';
    }
  });

  boton4.addEventListener('click', function() {
    if (informacion4.classList.contains('oculto')) {
      informacion4.classList.remove('oculto');
      boton4.classList.add('clicked');
      informacion4.style.marginTop = '0';
      boton4.style.marginTop = '0';
    } else {
      informacion4.classList.add('oculto');
      boton4.classList.remove('clicked');
      boton4.style.marginBottom = '0';
    }
  });

  boton5.addEventListener('click', function() {
    if (informacion5.classList.contains('oculto')) {
      informacion5.classList.remove('oculto');
      boton5.classList.add('clicked');
      informacion5.style.marginTop = '0';
      boton5.style.marginTop = '0';
    } else {
      informacion5.classList.add('oculto');
      boton5.classList.remove('clicked');
      boton5.style.marginBottom = '0';
    }
  });

