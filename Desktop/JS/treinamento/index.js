let lista = {
    'acorda 9h30 para ir jogar bola': true, 
    'ir joga bola': true, 
    'fazer um gol': false, 
    'da assistencia': false,
    'corinthians ganhar': true,
}


for(let chave in lista){
 console.log(`A tarefa: ${chave} está ${lista[chave] ? 'completa' : 'incompleta'}`)
}