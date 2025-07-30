/***************************************************************************************************************************
 * Objetivo: Arquivo responsável pelo cálculo de médias escolares e status de aprovação
 * Autor: Luana M. Lopes Bomfim
 * Data: 30/07/2025
 * Versão: 1.0
 ***************************************************************************************************************************/

//Função para realizar cálculos de médias escolares
function mediaEscolar (valor1, valor2, valor3, valor4){
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4

    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4

    return media.toFixed(1)

}

//Permite deixar a funções, variáveis, constantes e objetos públicos para serem utilizadas em outros arquivos e projetos
module.exports = {
    mediaEscolar
}