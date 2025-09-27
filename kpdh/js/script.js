// Lógica das abas
document.querySelectorAll('.abas button').forEach(botao => {
  botao.addEventListener('click', () => {
    const alvo = botao.getAttribute('data-target');
    // Desativa todas as abas e conteúdos
    document.querySelectorAll('.abas button').forEach(b => b.classList.remove('ativo'));
    document.querySelectorAll('.aba-conteudo').forEach(c => c.classList.remove('ativo'));
    // Ativa o atual
    botao.classList.add('ativo');
    document.getElementById(alvo).classList.add('ativo');    
  });
});

// Controle da música de fundo
const musica = document.getElementById('musica');
const musicaCtrl = document.getElementById('controle-musica');
let musicaTocando = false;
musica.volume = 0.15;

function alternarMusica() {
  if (musicaTocando) {
    musica.pause();
    musicaTocando = false;
    musicaCtrl.textContent = '🔇'
  } else {
    musica.play();
    musicaTocando = true;
    musicaCtrl.textContent = '🔊'
  }
}
musicaCtrl.addEventListener('click', alternarMusica);

window.addEventListener('DOMContentLoaded', () => {
  musica.play().then(() => {
    musicaTocando = true;
    musicaCtrl.textContent = '🔊'
  }).catch((err) => {
    musicaTocando = false;
    musicaCtrl.textContent = '🔈'
  });
});