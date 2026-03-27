// funções podem ou não receber parâmetros
// São blocos reaproveitáveis

function dizOla(){
    console.log("Olá!")
}
function dizOlaPessoa(nome){
    if(typeof nome !== "string"){
        console.error("por favor digite um valor e dexto!")
    } {
    console.log(nome +", diz olá!")
}
dizOla()
dizOlaPessoa("Pedro")
dizOlaPessoa("ChaolinMatadorDePorco")
}