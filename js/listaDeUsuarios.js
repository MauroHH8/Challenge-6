
function traer(){
    //console.log('Correcto');

    const ajax = new XMLHttpRequest(); //objeto especial
      
    ajax.open('GET','data/Usuarios.json',true); //inicializa la conexion(verbo,archivo o url , sincronico?)

    ajax.send();

    ajax.onreadystatechange = function() {

        if(this.readyState==4 && this.status==200){

          //console.log(this.responseText); //Me tira la respuesta en consola

          let datos = JSON.parse(ajax.responseText);  //La respuesta pasa de texto a JSON, y se guarda en una variable local

          //console.log(datos); //Muestra la respuesta en consola, con formato JSON

          let respuesta = document.querySelector('#listado-usuarios');

          respuesta.innerHTML='';

          for(let item of datos){
            respuesta.innerHTML += `
            <tr>
              <td>${item.Nombre}</td>
              <td>${item.Apellido}</td>
              <td>${item.Tipo}</td>
              <td>${item.Estado}</td>
            </tr>`
          }          
        }
    }
}

traer();

