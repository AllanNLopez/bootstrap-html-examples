
function getUserCardItem( pUserInfo ){
    var r_item_html = ''; 

    var vUserInfo = {
        "v_usr_id":"",
        "v_user_full_name":"",
        "v_rol_name": "",
        "v_user_email": "",
        "v_user_grupo":"",
        "v_user_area":""
    }; 

    r_item_html = `<button type="button" class="list-group-item list-group-item-action" aria-current="true" onclick="loadUserInfo(this.id)" id="`+ pUserInfo.v_usr_id+ `">` +
                        `<div class="d-flex w-100 justify-content-between">` +
                            `<h5 class="mb-1">`+ pUserInfo.v_user_full_name +`</h5>` +
                            `<small>`+ pUserInfo.v_rol_name +`</small>` +
                        `</div>` +
                        `<p class="mb-1">Correo: `+pUserInfo.v_user_email+`</p>` +
                        `<small> `+ pUserInfo.v_user_area +` - `+ pUserInfo.v_user_grupo+`</small>` +
                    `</button>`; 
    
    return r_item_html;
}

var arr = []; 

function addUserListItem(){
    arr = [
        {
            "v_usr_id":"123",
            "v_user_full_name":"Jonh Carter Doe",
            "v_rol_name": "",
            "v_user_email": "jonh.Doe@company.com",
            "v_user_grupo":"Grupo1",
            "v_user_area":"Area uno"
        },
        {
            "v_usr_id":"456",
            "v_user_full_name":"Oscar Danielo",
            "v_rol_name": "",
            "v_user_email": "oscar.dan@company.com",
            "v_user_grupo":"Grupo2",
            "v_user_area":"Area uno"
        },
        {
            "v_usr_id":"789",
            "v_user_full_name":"Maria Suarez",
            "v_rol_name": "",
            "v_user_email": "marisuarez@company.com",
            "v_user_grupo":"Grupo2",
            "v_user_area":"Area dos"
        }
    ]

    for (var i=0; i<arr.length; i++){
        document.getElementById('users-lists-items').innerHTML +=  getUserCardItem( arr[i] );
    }
    
}


function filterLaterList(pText){  
    console.log(pText);

    document.getElementById('users-lists-items').innerHTML = '';

    cont = arr.length;  

    for(var i=0;  i<cont; i++){
        tx =    arr[i].v_usr_id + 
                arr[i].v_user_full_name + 
                arr[i].v_rol_name + 
                arr[i].v_user_email + 
                arr[i].v_user_grupo +
                arr[i].v_user_area;
        
        tx = tx.toLowerCase() 
        if( tx.indexOf( pText.toLowerCase() ) > -1 ) {
            document.getElementById('users-lists-items').innerHTML +=  getUserCardItem( arr[i] );           
        } 
 
    }
/*
    if(items.length > 0 &&  pText.length >0){
        for(var i=0;  i<cont; i++){
            tx = items[i].innerHTML.toString().toLowerCase(); 
    
            console.log(i, pText, tx.indexOf( pText.toLowerCase() ), cont)

            if( tx.indexOf(pText) < 0 ) {
                document.getElementsByClassName('list-group-item')[i].remove();                
            } 
            temp = document.getElementsByClassName('list-group-item');
        }
        console.log(temp)
    }else {
        addUserListItem()
    } 
*/
}

function loadUserInfo(param){
    var x = param;
    document.getElementById(param).classList.add("active");
}