let pessoa = {
     idade: 19,
     name: 'thiago',
     profissao: 'social media',
     prop: 'existe'
}
for(let prop in pessoa){
     if(pessoa.hasOwnProperty('prop'))
          console.log(`pessoa.${prop} = ${pessoa[prop]}`);
     console.log(pessoa.hasOwnProperty('ano'))
}
