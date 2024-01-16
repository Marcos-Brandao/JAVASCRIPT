function gval() {
    let num = document.getElementById('txtn')
    let anal = document.getElementById('selanal')
    if(num.value.length < 1 || num.value.length > 100) {
        window.alert('Digite um valor entre 1 e 100')
    } else {
        anal.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
    }
}