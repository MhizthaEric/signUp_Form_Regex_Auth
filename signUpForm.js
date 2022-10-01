// Note d best way to validate a form is to validate it as u go therefore caling the function should be called on the input as u go else calling it on the entire form

// when u want to validate a form after it have been completely field u use the onSubmit();


// Function to make d button turn off until an input is completely field 

function userInput(){

    let userRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$&_-])[A-Za-z0-9@!#$&_-]{8,}$/;

    let userName = document.getElementById('user').value.trim();

    if(userRegex.test(userName)){
        document.getElementById('signInBtn').style.color = "blue";
        document.getElementById('userStatus').innerHTML = 'valid';
    }else{
        
        document.getElementById('signInBtn').disabled = 'true';
        document.getElementById('userStatus').innerHTML = "Invalid";
        // document.getElementById('signInBtn').setAttribute ('disabled','true');
    }
    
// placeHolder

    if(userName.length > 0){
        document.getElementById('username').innerHTML = 'Username';
    }else{
        document.getElementById('username').innerHTML = "";
    }

    if(userName.length > 0){
        document.getElementById('uCount').innerHTML = userName.length;
    }else{
        document.getElementById('uCount').innerHTML = "";
    }

    if(userName.length == 16){
        alert('max');
    }
}

function gInput(){

    let gRegex = /^[A-Za-z][A-Za-z0-9]*(([0-9])*([_-][A-Za-z0-9]+))*@([A-Z0-9]{3,})(.[A-Z]{2,})+$/;

    let gTest = document.getElementById('eMail').value.trim();

    if(gRegex.test(gTest)){
        document.getElementById('eStatus').innerHTML = 'valid';
    }else{
        document.getElementById('eStatus').innerHTML = "Invalid";
    }

    if(gTest.length > 0){
        document.getElementById('ePlaceholder').innerHTML = 'Email';
    }else{
        document.getElementById('ePlaceholder').innerHTML = "";
    }

    if(gTest.length == 16){
        alert('max');
    }
}

function pInput(){

    let pRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$&_-])[A-Za-z0-9@!#$&_-]{8,}$/;

    let password = document.getElementById('pass').value.trim();

    if(pRegex.test(password)){
        document.getElementById('pStatus').innerHTML = 'valid';
    }else{
        document.getElementById('pStatus').innerHTML = "Invalid";
        // document.getElementById('signInBtn').setAttribute ('disabled','true');
    }
    
// placeHolder

    if(password.length > 0){
        document.getElementById('passPlaceholder').innerHTML = 'Password';
    }else{
        document.getElementById('passPlaceholder').innerHTML = "";
    }

    if(password.length > 0){
        document.getElementById('pCount').innerHTML = password.length;
    }else{
        document.getElementById('pCount').innerHTML = "";
    }

    if(password.length == 16){
        alert('max');
    }
}

function cInput(){

    let password = document.getElementById('pass').value.trim();
    let confirmPass = document.getElementById('cpass').value.trim();

    if(confirmPass.length > 0){
        document.getElementById('conPlaceholder').innerHTML = 'Confirm Password';
    }else{
        document.getElementById('conPlaceholder').innerHTML = "";
    }

    if(confirmPass.length == 16){
        alert('max');
    }

    if(password == confirmPass){
        document.getElementById('cStatus').innerHTML = 'Match';
    }else{
        document.getElementById('cStatus').innerHTML = "Mis-Match";
    }
}


// function showPass(){
//     document.getElementById('cPass').value;
//     if(cPass.type == password){
//         document.getElementById('cPass').setAttribute("type", "text");
//         document.getElementById('img').innerHTML = hide;
//     }
// }


// /^[A-Za-z]{3,}\s[A-Za-z]{3,}(\s[A-Za-z]{3,}{0,2})$/


