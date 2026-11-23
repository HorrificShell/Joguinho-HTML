let totalRodadas = 0;
let rodadaAtual = 0;
let vitorias = 0;

function iniciarJogo() {
    let rodadas = document.getElementById("rodadas").value;
    let mensagem = document.getElementById("mensagem");

    if (rodadas === "") {
        mensagem.innerHTML = "Digite a quantidade de rodadas!";
    }
    else if (isNaN(rodadas)) {
        mensagem.innerHTML = "Digite apenas números!";
    }
    else {
        totalRodadas = Number(rodadas);

        document.getElementById("telaInicial").style.display = "none";
        document.getElementById("telaJogo").style.display = "block";

        mostrarRecorde();
    }
}

function jogar(escolhaUsuario) {

    let opcoes = ["Pedra", "Papel", "Tesoura"];

    let escolhaPc = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado = "";

    if (escolhaUsuario === escolhaPc) {
        resultado = "Empate!";
    }
    else if (
        (escolhaUsuario === "Pedra" && escolhaPc === "Tesoura") ||
        (escolhaUsuario === "Papel" && escolhaPc === "Pedra") ||
        (escolhaUsuario === "Tesoura" && escolhaPc === "Papel")
    ) {
        resultado = "Você venceu!";
        vitorias++;
    }
    else {
        resultado = "Você perdeu!";
    }

    rodadaAtual++;

    document.getElementById("resultado").innerHTML =
        `Você: ${escolhaUsuario} | Computador: ${escolhaPc}<br>${resultado}`;

    document.getElementById("placar").innerHTML =
        `Rodada ${rodadaAtual} de ${totalRodadas}`;

    if (rodadaAtual >= totalRodadas) {

        let recorde = localStorage.getItem("recorde");

        if (recorde === null || vitorias > recorde) {
            localStorage.setItem("recorde", vitorias);
        }

        alert(`Fim do jogo! Você venceu ${vitorias} vez(es).`);

        mostrarRecorde();

        rodadaAtual = 0;
        vitorias = 0;
    }
}

function mostrarRecorde() {
    let recorde = localStorage.getItem("recorde");

    if (recorde === null) {
        recorde = 0;
    }

    document.getElementById("recorde").innerHTML =
        `Recorde de vitórias: ${recorde}`;
}