// funções de retorno objetos 
// chamamos isso de 'função constrtura'
// isso permite criamos varia instâncias 
// do mesmo objetos de forma dinamica!

function fabricarCarro(marca, modelo, montadora, motor) {
    return {
        marca: marca,
        modelo:  modelo,
        montadora: montadora,
        motor: motor

    }
}
const carro02 = {
    marca: 'BMW',
    modelo: 'X5',
    montadora: 'BMW S.A',
    motor: 'v8 6.0'
}

 const camaro = fabricarCarro("camaro", "Camaro v387", "chevrolet", "v8") // tenho 2 problemas!!!
 const bmw = fabricarCarro(carro02.marca, carro02.modelo, carro02.montadora, carro02.motor)
 console.log(camaro)
 console.log(bmw)
