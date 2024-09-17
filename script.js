console.log('Documento JS caricato!')

// recuperiamo i riferimenti ai 4 bottoni 1-2-3-4 nella pagina
// metodo querySelectorAll
const fourButtons = document.querySelectorAll('.btn-group > button')
// metodo getElementsByTagName
// const fourButtons = document.getElementsByTagName('button')
console.log('fourButtons', fourButtons)

// recuperiamo i riferimenti alle prime 4 cards con i gatti: ho dato una classe
// speciale "first-four-cols"
const firstFourCols = document.getElementsByClassName('first-four-cols')
console.log('firstFourCols', firstFourCols)

// facciamola prima funzionare per il primo bottone
// fourButtons[0].addEventListener('click', function () {
//   console.log('PRIMO BOTTONE CLICCATO!')
//   // ora dobbiamo NASCONDERE la prima col con il primo gatto
//   // applicando la classe "invisible" al primo degli elementi contenuti in "firstFourCols"
//   firstFourCols[0].classList.toggle('invisible')
// })

// facciamo ora funzionare TUTTI i bottoni, ciclandoli!
// for (let i = 0; i < fourButtons.length; i++) {
//   // al primo ciclo i è 0 -> fourButtons[0]
//   // al secondo ciclo i è 1 -> fourButtons[1]
//   // al terzo ciclo i è 2 -> fourButtons[2]
//   // al quarto ciclo i è 3 -> fourButtons[3]
//   fourButtons[i].addEventListener('click', function () {
//     firstFourCols[i].classList.toggle('invisible')
//   })
// }

fourButtons.forEach((button, i) => {
  button.addEventListener('click', function () {
    firstFourCols[i].classList.toggle('invisible')
  })
})
