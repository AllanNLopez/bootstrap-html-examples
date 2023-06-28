
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

function getTabLinkItemHtml(){
    var v_tablink = ""; 

    var data = {
        title:"",
        id:"",
        href:""
    }; 

    v_tablink = `<li class="nav-item"> <a class="nav-link" href="`+data.href+`">`+data.title+`</a></li>`;

    return v_tablink; 
}