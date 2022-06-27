const password = document.getElementById('user_password');
const passwordConfirm = document.getElementById('user_password_confirm');

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);

function validatePassword(e){
  if(password.value === passwordConfirm.value) {
    password.setAttribute('style', 'border-color:rgb(85, 213, 71);border-style:solid;border-radius: 2px;');
    passwordConfirm.setAttribute('style', 'border-color:rgb(85, 213, 71);border-style:solid;border-radius: 2px;');
  }
  else{
    password.setAttribute('style', 'border: 2px solid red; border-radius: 2px;');
    passwordConfirm.setAttribute('style', 'border: 2px solid red; border-radius: 2px;');
  }
  console.log(password.checkValidity());
}

