function validacion() {
    let nombre=document.getElementById('name').value;
    let clave=document.getElementById('key').value;

    if (clave == null || clave.length <5 ) {
      // Si no se cumple la condicion...
      alert('[ERROR] La clave no puede tener longuitud menor a 5');
      return false;
    }

    // En el caso de no ingresar el @ , o que exista mas de uno
    if (arrobas(nombre)==0) {
      alert('[ERROR] Falta el @');
      return false;
    }else if ( arrobas(nombre)>1) {
      alert('[ERROR] Existen varios @');
      return false;
    }
  
    /* Si el script ha llegado a este punto, todas las condiciones
    se han cumplido, por lo que se devuelve el valor true*/
    alert("Ingresando");
    return true;
}

/*Determina si hay un solo @ y su existencia*/
function arrobas(nombre) {
  let cont=0;
  for (let i = 0; i < nombre.length; i++) {
    if(nombre[i]=="@"){
      cont+=1;
    }
  }
  return cont;
}