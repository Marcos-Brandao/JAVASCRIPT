function adcval() {
    let num = window.document.getElementById('txtn')
    let ana = document.getElementById('selanal')
    let n = Number(num.value)
    let c = []
    
    if(n >= 1 && n <= 100) {
        c.push(n)
        ana.innerHTML += ''
        let item = document.createElement('option')
        item.text = `Valor ${c} adcionado`
        ana.appendChild(item)
        
    } else {
        window.alert('Escreva um número entre 1 e 100')
    }
}
function fim() {
    

    
  }
for(let res = 0;res < 10;res++) { 
        console.log(c[res])
    }
/*

 
*/