
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
    document.getElementById('users-lists-items').innerHTML +=  getUserCardItem(
        {
            "v_usr_id":"4586564",
            "v_user_full_name":"Jonh Carter Doe",
            "v_rol_name": "",
            "v_user_email": "jonh.Doe@company.com",
            "v_user_grupo":"",
            "v_user_area":""
        }
    );
}

function loadUserInfo(param){
    var x = param;
    document.getElementById(param).classList.add("active");
}