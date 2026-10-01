/**
 * PROMPT DE INTERATIVIDADE & DINAMISMO (VERSÃO PREMIUM)
 * Função: Controlar o comportamento do checkout e acionar o efeito visual de celebração.
 */

// Função para abrir a janela de checkout com o nome do curso selecionado
function abrirCheckout(nomeCurso) {
    const modal = document.getElementById('checkoutModal');
    const txtCurso = document.getElementById('cursoSelecionado');
    
    if (modal && txtCurso) {
        txtCurso.innerText = nomeCurso;
        modal.style.display = 'flex';
    }
}

// Função para fechar a janela de checkout
function fecharCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Função para simular a finalização da matrícula e soltar a chuva de notas/hambúrgueres
function finalizarMatricula() {
    alert('💥 Transação aceita! O sistema econômico não sabe explicar como, mas você acaba de dar o primeiro passo para comprar o Brasil e a Lua. Verifique seu e-mail!');
    fecharCheckout();
    criarChuvaDeSucesso();
}

// Fecha o modal caso o usuário clique na área escura fora da janela preta
window.onclick = function(event) {
    const modal = document.getElementById('checkoutModal');
    if (event.target === modal) {
        fecharCheckout();
    }
}

// Mágica Visual: Cria elementos caindo na tela igual a um encerramento de vídeo
function criarChuvaDeSucesso() {
    const elementos = ['💵', '🍔', '💰', '👑'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const gota = document.createElement('div');
            
            // Escolhe um emoji aleatório da lista
            gota.innerText = elementos[Math.floor(Math.random() * elementos.length)];
            
            // Estilização dinâmica via JavaScript para não quebrar seu CSS
            gota.style.position = 'fixed';
            gota.style.top = '-50px';
            gota.style.left = Math.random() * 100 + 'vw';
            gota.style.fontSize = Math.random() * (35 - 20) + 20 + 'px';
            gota.style.zIndex = '9999';
            gota.style.pointerEvents = 'none';
            gota.style.transition = 'transform 3s linear, opacity 3s ease-out';
            
            document.body.appendChild(gota);
            
            // Força o navegador a renderizar antes de aplicar a animação de queda
            setTimeout(() => {
                gota.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
                gota.style.opacity = '0';
            }, 50);
            
            // Remove o elemento da memória após o término da animação
            setTimeout(() => {
                gota.remove();
            }, 3050);
            
        }, i * 60); // Cria um efeito cascata espaçado
    }
}
