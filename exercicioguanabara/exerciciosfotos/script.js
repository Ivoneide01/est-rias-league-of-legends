let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#rest')
let valores = [] // lista


function seNumero(n){
    if (Number(n)>= 1 && Number(n)<= 100)  {// se o numero começar com 1 e for abaixo de 100
        return true 

    }else{
        return false
    }

}
function senaoEstiveremlista(n,ista1) { // se os numeros nao for abaixo de 100, L esta criando outra variavel 
    if (ista1.indexOf (Number(n)) != -1){
        return true
        
    } else{
        return false
    }
}
function adicionar(){
    if (seNumero(num.value) && !senaoEstiveremlista(num.value, valores)){ // só vai adicionar se tiver em lista e se for um numero
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (num.value)
        lista.appendChild(item);
        res.innerHTML = ''
    }else {
        window.alert('valor invalido ou ja adicionado na lista')
    }
}
function finalizar(){
     if(valores.length == 0){
        window.alert('Adicone valores antes de finalizar!')
     }else{
        let total = valores.length
        res.innerHTML = ''
        res.innerHTML += `${total}` // o $ faz com que seja transformado o total em quantidades
     }
}

//function deletar(){
  //  if (seNumero(num.value) && !senaoEstiveremlista(num.value, valores)){ // só vai adicionar se tiver em lista e se for um numero
   //     valores.push(Number(num.value))
     //   let item = document.createElement('option')
        //item.text = (num.value)
      //  lista.appendChild(item);
    //}else {
        window.alert('valor invalido ou ja adicionado na lista')
    //}
//}


