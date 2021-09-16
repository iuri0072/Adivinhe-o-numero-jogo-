console.clear();
var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function Chutar() {
  console.clear();
  var elementoResultado = document.getElementById("resultado");
  var elementoTentativas = document.getElementById("tentativas");
  var elementoDica = document.getElementById("dica");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute > numeroSecreto) {
    var dica = "O número secreto é menor do que esse valor";
  } else {
    var dica = "O número secreto é maior do que esse valor";
  }

  if (chute == numeroSecreto) {
    tentativas++;
    elementoResultado.innerHTML =
      "Você acertou!<br>Novo número aleatório gerado";
    elementoTentativas.innerHTML = "Tentativas: " + tentativas;
    elementoDica.innerHTML = null;
    //console.log("Acertou");
    //console.log("Novo número aleatório gerado");
    tentativas = 0;
    numeroSecreto = parseInt(Math.random() * 11);
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Você deve entrar com valores entre 0 e 10";
    elementoDica.innerHTML = null;
    //console.log("Você deve entrar com valores entre 0 e 10");
  } else {
    tentativas++;
    elementoResultado.innerHTML = "Você errou!<br>Tente novamente";
    elementoDica.innerHTML = "Dica: " + dica;
    elementoTentativas.innerHTML = "Tentativas: " + tentativas;
    //console.log("Errou");
  }
}