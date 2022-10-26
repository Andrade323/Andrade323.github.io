
creartabla();

var agregar = document.getElementById("botonB");

agregar.addEventListener("click",agregarClick);

function agregarClick(){

    var nombre = document.getElementById("Nombre").value;
    
    var texttarea = document.getElementById("texttarea").value;

    if(validacion(nombre,texttarea) == true){
        agregara(nombre,texttarea);
        creartabla();
    }
    
}




function creartabla(){
    
    var lista = consegir();
  
    tbody = document.querySelector("#lista_de_name tbody");
    
    tbody.innerHTML = '';
    
    for(var z = 0; z < lista.length; z++){
       
        var row = tbody.insertRow(z),
        NombreCell = row.insertCell(0),
        
        FalloCell = row.insertCell(7);
    
        NombreCell.innerHTML = lista[z].Nombre;
        
        var fail = (lista[z].Fallo).slice(0,10) + "..."
        FalloCell.innerHTML = fail;
  
        tbody.appendChild(row);
    } 
}

    var listaName = [];


function agregara(nombre,texttarea){
    
    //creamos un objeto
    var nuevoname = {
        Nombre: nombre,
        
        Fallo: texttarea   
    };
    console.log(nuevoname);
    listaName.push(nuevoname);
  
    basedatosname(listaName);  
}

function consegir(){
    
    var BDname = localStorage.getItem("BDname");
    
    if(BDname == null){
       listaName = [];
       }else{
       listaName = JSON.parse(BDname);
       }
    
    return listaName;
}

function basedatosname(plista){
    
    localStorage.setItem("BDname",JSON.stringify(plista));
    
}
//validamos datos
function validacion(nombre,texttarea){
    var validado = false;
    if(nombre.length < 4){
       alert("Nombre no completo");
       }else{
           
       }
    
    return validado;
}
