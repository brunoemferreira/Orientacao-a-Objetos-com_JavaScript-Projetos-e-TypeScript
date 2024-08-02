let carro = {
  portas: 4,
  cor: "Vermelha",
};

console.log(carro.portas);
console.log(carro.cor);

if(carro.portas > 2){
    console.log("O carro tem mais de 2 portas");
}


let pessoa = {
  nome: "Bruno",
};

console.log(pessoa['nome']);

let nomePessoa = pessoa["nome"];
console.log(nomePessoa.length);
