// botão procurar campeao

function procurarCampeao() {
  var inputValor = document.getElementById('text1').value.toLowerCase();
  var resultadoBusca = document.getElementById('resultadoBusca');
  resultadoBusca.innerHTML = '';

  if (inputValor) {
    var imagens = document.querySelectorAll('.img_gallery');

    imagens.forEach(function(imagem) {
      var nomeCampeao = imagem.alt.toLowerCase();
      if (nomeCampeao.includes(inputValor)) {
        var cloneArticle = imagem.closest('article').cloneNode(true);
        resultadoBusca.appendChild(cloneArticle);
      }
    });

    if (resultadoBusca.innerHTML === '') {
      resultadoBusca.textContent = 'Nenhum campeão encontrado.';
    }
  } else {
    resultadoBusca.textContent = '';
  }
}


// abrirPopup

function abrirPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  popup.style.overflow = 'auto'; // Adiciona barra de rolagem se necessário
  
}

document.getElementById('fechar').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
});
// expandir Popup
function expandirConteudo() {
  var popup = document.getElementById('popup');
  popup.style.maxHeight = 'none';
  document.getElementById('verMais').style.display = 'none';
}

window.onload = function() {
  var popup = document.getElementById('popup');
  var verMaisBtn = document.getElementById('verMais');

  if (popup.scrollHeight > popup.clientHeight) {
      verMaisBtn.style.display = 'block';
  }
}


// fechar Popup
function fecharPopup() {
  var popup = document.getElementById('popup');
  var verMaisBtn = document.getElementById('verMais');

  popup.style.maxHeight = '';
  verMaisBtn.style.display = 'none';
  popup.style.overflow = ''; // Limpa a propriedade de overflow
}


// livro 

