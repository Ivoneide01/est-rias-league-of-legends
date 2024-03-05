function focusCard(card) {
    card.querySelector('.nomes').style.opacity = 1;
}
function focusCard(card) {
    card.querySelector('.buttonVermais').style.opacity = 1;
}

// Função para exibir o botão "Ver Estória" ao passar o mouse sobre o card
function addFocusButton(card) {
    card.querySelector('.buttonVermais').style.display = 'inline-block'; /* Exibe o botão */
}

// Função para ocultar o botão "Ver Estória" ao retirar o mouse do card
function removeFocusButton(card) {
    card.querySelector('.buttonVermais').style.display = 'none'; /* Oculta o botão */
}
