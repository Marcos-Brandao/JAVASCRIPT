const input = document.querySelector('input')

input.addEventListener('keypress', () => { 
    let inputLength = input.value.length 

if (inputLength === 3 || inputLength === 7){
   input.value += '.'

} else if (inputLength === 11) {
    input.value += '-'
}
})

// const input = document.querySelector('input')
// input.addEventListener('keypress', () => {
//     let inputLength = input.value.length

// if (inputLength === 4 || inputLength === 9 ) {
//     input.value += ' '
// } 
// })