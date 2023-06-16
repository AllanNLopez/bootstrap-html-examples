
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

function addUserListItem(){
    arr = [
        {
            "v_usr_id":"123",
            "v_user_full_name":"Jonh Carter Doe",
            "v_rol_name": "",
            "v_user_email": "jonh.Doe@company.com",
            "v_user_grupo":"",
            "v_user_area":""
        },
        {
            "v_usr_id":"456",
            "v_user_full_name":"Oscar Danielo",
            "v_rol_name": "",
            "v_user_email": "jonh.Doe@company.com",
            "v_user_grupo":"",
            "v_user_area":""
        },
        {
            "v_usr_id":"789",
            "v_user_full_name":"Maria Suarez",
            "v_rol_name": "",
            "v_user_email": "jonh.Doe@company.com",
            "v_user_grupo":"",
            "v_user_area":""
        }
    ]
    for (var i=0; i<arr.length; i++){
        document.getElementById('users-lists-items').innerHTML +=  getUserCardItem( arr[i] );
    }
    
}

function loadUserInfo(param){
    var x = param;
    document.getElementById(param).classList.add("active");
}