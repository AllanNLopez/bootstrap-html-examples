
const Parametro = {

};

const Configuracion = {

}; 


function getParamItemHtml(){
    var v_html = ''; 
    var ElementTag = "input"; 

    var oAtrr = {
        labelText :"",
        inputId:"",
        inputName:"",
        inputType:""
    };

    switch(ElementTag){
        case 'input': 
            v_html = `<div class="row mb-2">`+ 
                        `<label   class="col form-control-label ">`+oAtrr.labelText+`</label>`+ 
                        `<input type="`+oAtrr.inputType+`" id="`+oAtrr.inputId+`" name="`+oAtrr.inputName+`" class="col form-control form-control-sm"></input>`+ 
                    `</div>`; 
            break; 

        case 'comboBox':
            break; 

        default: 
            break;

    } 

    return v_html;

}

function getTabsLinksItemHtml(){
    var v_tablink = ""; 
    var v_ul = "";
    var active = "active";

    var data = [
        {
            title:"Nombre de vista 1",
            id:"",
            href:"#"
        },
        {
            title:"Nombre de vista 2",
            id:"",
            href:"#"
        },
        {
            title:"Nombre de vista 3",
            id:"",
            href:"#"
        }
    ];
    
    for(var i=0; i<data.length; i++){
        if(i>0){ active ="" }
        v_tablink += `<li class="nav-item"> <a class="nav-link `+active+`" href="`+data[i].href+`"><h6>`+data[i].title+`</h6></a></li>`;
    }    

    v_ul = `<ul class="nav nav-tabs card-header-tabs" >`+ v_tablink + `</ul>`;

    document.getElementById('tabs-links').innerHTML = v_ul;

    return v_tablink; 
}