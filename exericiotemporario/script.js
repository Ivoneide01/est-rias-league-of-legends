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

function abrirPopup() {
  document.getElementById('popup').style.display = 'block';
}

document.getElementById('fechar').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});