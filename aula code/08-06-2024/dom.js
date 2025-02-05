function copo(){
    const input = document.querySelector('input');
    const h1 = document.querySelector('h1');
    
    const valor = input.value;

    h1.innerHTML = valor;
    input.value = '';
}
