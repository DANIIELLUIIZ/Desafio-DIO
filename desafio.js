//Crie uma funcão que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de rankeadas deve ser feitos através de calculo (vitórias - derrotas)

calculoRanked(1000, 959)

function calculoRanked(vitorias, derrotas) {
  let pontos = vitorias - derrotas
  let mensagem = `Você tem ${pontos} ponto(s) e seu nível é: `

  if (pontos < 10) {
    console.log(mensagem + 'Ferro')
  } else if (pontos >= 11 && pontos <= 20) {
    console.log(mensagem + 'Bronze')
  } else if (pontos >= 21 && pontos <= 50) {
    console.log(mensagem + 'Prata')
  } else if (pontos >= 51 && pontos <= 80) {
    console.log(mensagem + 'Ouro')
  } else if (pontos >= 81 && pontos <= 90) {
    console.log(mensagem + 'Diamante')
  } else if (pontos >= 91 && pontos <= 100) {
    console.log(mensagem + 'Lendário')
  } else {
    console.log(mensagem + 'Imortal')
  }
}
