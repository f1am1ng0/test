function checkpassword(password)
{
var checker=0;
if (password.match(/[a-z]+/)){
checker+=1;
}
if (password.match (/[A-Z]+/)){
checker+=1;
}
if (password.match(/[0-9]+/)){
checker+=1;
}
if (password.match(/[$@#&!]+/)){
checker+=1;
}
if (password.length >= 8){
checker+=1
} }