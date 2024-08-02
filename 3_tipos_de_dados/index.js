let maquina = {
  material: "Aço Inox",
  equipamentos: ["motor", "freio", "esteira", "cilindro"],
  vaiMontada: false,
  numeroDeMotores: 1,
};

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[2]);
console.log(maquina.equipamentos);

for (const equipamento of maquina.equipamentos) {
  console.log(equipamento);
}

if (!maquina.vaiMontada) {
  console.log("O Comprador precisa montar a maquina");
}
