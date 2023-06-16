
var Usuario = {
    idUsuario:"",
    nombreCompleto:"",
    usuario:"",
    correo:"",
    telefono:"",
    estado:""
};  

function clearFormFieldsItems(pSelectorName){
    xitems = document.getElementsByClassName(pSelectorName); 

    for(var i=0; i<xitems.length; i++){
        xitems[i].value = ""; 
    }
}

function getObjectFormFieldItems(pSelectorName){ 
    vElements   = document.getElementsByClassName(pSelectorName); ;
    data = []; 
    ob = {};

    for(i=0; i<vElements.length; i++){
        key = vElements[i].name;
        val = vElements[i].value; 
        Object.assign(ob, {[key]: val});
 
    } 
    return ob; 
}

function setFormFieldsItems(oY){
    x = document.getElementsByClassName('user-item-field');   
    y = oY; 

    for(i = 0; i<x.length; i++){
        //console.log( x[i].id );
        //console.log(  y[ x[i].name ] )
        document.getElementById(x[i].id).value = y[ x[i].name ];   
        //$('#'+x[i].id+'').val( y[ x[i].name ] )

        //x[ x[i].id ].value = y[ x[i].name ]
    } 
}
 
 //ClearUserItems: Set the value atribute of html items to empty
function clearUserItems(){
    xitems = document.getElementsByClassName('user-item-field'); 

    for(var i=0; i<xitems.length; i++){
        xitems[i].value = ""; 
    }
}

//setitemsvalue: Setea el valor de los items de formulario a partir de un objeto
function setItemsValues(oY){
    x = document.getElementsByClassName('user-item-field');   
    y = oY; 

    for(i = 0; i<x.length; i++){
        //console.log( x[i].id );
        //console.log(  y[ x[i].name ] )
        document.getElementById(x[i].id).value = y[ x[i].name ];   
        //$('#'+x[i].id+'').val( y[ x[i].name ] )

        //x[ x[i].id ].value = y[ x[i].name ]
    } 
}

//setObjectData: Crea un objeto utilizando la propiedad name como key y le asigna su respectivo valor 
function getData(){ 
    vElements   = document.getElementsByClassName('user-item-field'); ;
    data = []; 
    ob = {};

    for(i=0; i<vElements.length; i++){
        key = vElements[i].name;
        val = vElements[i].value; 
        Object.assign(ob, {[key]: val});
 
    } 
    return ob; 
}
 
function setObjectValsFromObject(obOrigen, obDestino) {
    //Se asignaran valores del obDestino hacia el obDestino
    //obtener keys de obOrigen 
    var obOrKys = Object.keys(obOrigen);

    //validar que existen cada key en el objeto destino
    for (var i = 0; i < obOrKys.length; i++) {
        if (obDestino.hasOwnProperty(obOrKys[i])) {
            obDestino[obOrKys[i]] = obOrigen[obOrKys[i]];
        } else {
            obDestino[obOrKys[i]] = "";
        }
    }

    return obDestino;

}
 
function filterLaterList(pText){
    
    console.log(pText)
    items = document.getElementsByClassName('list-group-item');

    console.log(items )

    if(items.length > 0 ){
        for(var i=0;  i<items.length; i++){
            tx = items[i].innerHTML.toString().toLowerCase(); 
    
            console.log(pText, tx.indexOf( pText.toLowerCase() ))
    
            if(pText.length>0){
                if( tx.indexOf(pText) < 1 ) {
                    document.getElementsByClassName('list-group-item')[i].remove();
                } 
            }else{
                addUserListItem()
            }
        }
    }else {
        addUserListItem()
    }



}