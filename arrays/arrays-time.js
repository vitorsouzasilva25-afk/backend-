// Um array é um grupo indexado de valoe
// Podem ser homogẽneos / heterogẽneos
// Seus ínices vão de "0" ... "infintos"
// Possuem funções nativas (prontas)
// Podem ser interados e checados

const time= ['maria' , 'clara' , 'myria' , true, , 56]
  //índices     0         1         2

  time[55] // undefined

  for (const jogador of time) {
      console.log("jogador: " +jogador)
  }
  