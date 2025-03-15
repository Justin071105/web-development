const setup = () => {
let tekst = 'onoorbaar';
for(let i = 0; i < tekst.length; i++){
    if(tekst.substring(i, i+3).length >= 3){
    console.log(tekst.substring(i, i+3));
}}


}
window.addEventListener("load", setup);