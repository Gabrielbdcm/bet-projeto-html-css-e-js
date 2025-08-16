let paginaatual = 'home';
      let saldo = 0;
      
      document.querySelector("#todo").style.display = "block";
      document.addEventListener("DOMContentLoaded", () => {
        atualizarSaldo();
      });
      
    function cassino() {
      if (paginaatual === 'home'){
        document.querySelector("#todo").style.display = "none";
        document.querySelector(".ijogo").style.display = "block";
        paginaatual = 'cassino';
      }
          else {
            document.querySelector(".recarga").style.display = "none";
            document.querySelector(".ijogo").style.display = "block";
            paginaatual = 'cassino';
          }
    }
    
    function home() {
      if (paginaatual === 'cassino'){
        document.querySelector(".ijogo").style.display = "none";
        document.getElementById("todo").style.display = "block";
        paginaatual = 'home';
      }
      else {
        document.querySelector(".recarga").style.display = "none";
        document.getElementById("todo").style.display = "block";
        paginaatual = 'home';
      }  
    }
    
    function esporte() {
      alert ('A área de esportes não foi implementada.')
    }
    
    function recarga(){
      if (paginaatual === 'home'){
        document.querySelector("#todo").style.display = "none";
        document.querySelector(".recarga").style.display = "block";
        paginaatual = 'recarga';
      }
      else {
        document.querySelector(".ijogo").style.display = "none";
        document.querySelector(".recarga").style.display = "block";
        paginaatual = 'recarga';
      }
    }
    
    function atualizarSaldo(){
      const saldoElemento = document.querySelector(".carteira h4");
      // Formata o saldo para duas casas decimais e troca ponto por vírgula
      let saldoFormatado = saldo.toFixed(2).replace('.', ',');
  
      // Atualiza o texto do <h4> para o valor formatado com R$ na frente
      saldoElemento.textContent = `R$ ${saldoFormatado}`;
    }
    
    function recarregar(){
      const inputRecarga = document.getElementById('inputar');
      let valordarecarga = parseFloat(inputRecarga.value);
      //vefiricação para ver se é maior q zero
      if (isNaN(valordarecarga)|| valordarecarga <= 0){
        alert ('Recarregue um valor valído');
        return;
      }

      saldo += valordarecarga;   // soma o valor no saldo atual
      atualizarSaldo();        // atualiza o saldo na tela
      inputRecarga.value = ""; // limpa o campo de recarga
    }

    function injogar() {
      const apostaInput = document.getElementById('inputap');
      const valorAposta = parseFloat(apostaInput.value);

      if (isNaN(valorAposta) || valorAposta <= 0) {
        alert('Por favor, insira um valor válido para apostar.');
        return;
      }

      if (valorAposta > saldo) {
        alert('Saldo insuficiente para essa aposta.');
        return;
      }

      // Pede para o jogador escolher cara ou coroa
      let escolhaJogador = prompt('Escolha cara ou coroa:').toLowerCase();

      if (escolhaJogador !== 'cara' && escolhaJogador !== 'coroa') {
        alert('Escolha inválida. Por favor, digite "cara" ou "coroa".');
        return;
      }

      // Sorteia o resultado da moeda
      const opcoes = ['cara', 'coroa'];
      const resultado = opcoes[Math.floor(Math.random() * 2)];

      // Verifica se o jogador acertou
      let mensagem = `Você escolheu <strong>${escolhaJogador}</strong>... deu <strong>${resultado}</strong>!<br>`;

      if (escolhaJogador === resultado) {
        saldo += valorAposta; // dobra a aposta (ganho = aposta)
        mensagem += `Parabéns, você ganhou R$ ${valorAposta.toFixed(2)}!`;
      } else {
        saldo -= valorAposta; // perde a aposta
        mensagem += `Você perdeu R$ ${valorAposta.toFixed(2)}. Tente de novo!`;
      }

      // Atualiza o resultado na tela e o saldo
      document.getElementById('resultado').innerHTML = mensagem;
      atualizarSaldo();

      // Limpa o input
      apostaInput.value = '';
    }