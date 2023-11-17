const readLine = require("readline");

let interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dadosDoHeroi = {
  vitorias: 0,
  derrotas: 0,
  saldoDeVitorias: 0,
  nivel: "",
};

function classificarNivel(vitorias, derrotas) {
    dadosDoHeroi.derrotas = derrotas;
    dadosDoHeroi.vitorias = vitorias;
    dadosDoHeroi.saldoDeVitorias = vitorias - derrotas;
  
    switch (true) {
      case dadosDoHeroi.saldoDeVitorias <= 10:
        dadosDoHeroi.nivel = "Ferro";
        break;
      case dadosDoHeroi.saldoDeVitorias <= 20:
        dadosDoHeroi.nivel = "Bronze";
        break;
      case dadosDoHeroi.saldoDeVitorias <= 50:
        dadosDoHeroi.nivel = "Prata";
        break;
      case dadosDoHeroi.saldoDeVitorias <= 80:
        dadosDoHeroi.nivel = "Ouro";
        break;
      case dadosDoHeroi.saldoDeVitorias <= 90:
        dadosDoHeroi.nivel = "Diamante";
        break;
      case dadosDoHeroi.saldoDeVitorias <= 100:
        dadosDoHeroi.nivel = "Lendário";
        break;
      case dadosDoHeroi.saldoDeVitorias >= 101:
        dadosDoHeroi.nivel = "Imortal";
        break;
      default:
        console.log("Dados inválidos");
        break;
    }
  
    return dadosDoHeroi.saldoDeVitorias;
  }  

interface.question("Quantas vitórias o herói teve?", (vitorias) => {

    interface.question("Quantas derrotas o herói teve? ", (derrotas) => {
        console.log(
          `O herói tem de saldo de ${classificarNivel(vitorias, derrotas)} vitórias está no nível de ${dadosDoHeroi.nivel}`
        );
        interface.close();
      });
})


