function combustivel() {
  var gasolina = document.getElementById('gasolina').value
  var etanol = document.getElementById('etanol').value
  var result = document.getElementById('result')

  // troca vírgula por ponto

  gasolina = gasolina.replace(',', '.')
  etanol = etanol.replace(',', '.')

  //algoritmo
  if (gasolina != '' && etanol != '') {
    var maisBarato = etanol / gasolina

    result.innerHTML = `A proporção é de 
  ${maisBarato.toFixed(2)}%, por isso é melhor abaster com `

    if (maisBarato >= 0.7) {
      result.innerHTML += 'Gasolina'
    } else {
      result.innerHTML += 'Etanol'
    }
    result.style.color = ''
  } else {
    result.innerHTML = 'Preencha os campos para o cálculo'
    result.style.color = 'red'
  }
}

function verificarInput(event) {
  var letra = event.key

  if (
    letra != 0 &&
    letra != 1 &&
    letra != 2 &&
    letra != 3 &&
    letra != 4 &&
    letra != 5 &&
    letra != 6 &&
    letra != 7 &&
    letra != 8 &&
    letra != 9 &&
    letra != 'Backspace' &&
    letra != 'Delete' &&
    letra != 'Shift' &&
    letra != '.' &&
    letra != ',' &&
    letra != 'Enter' &&
    letra != 'Tab' &&
    letra != 'ArrowLeft' &&
    letra != 'ArrowRight'
  ) {
    alert('Caractere inválido!')
    document.getElementById('gasolina').value = ''
    document.getElementById('etanol').value = ''
  }
}
