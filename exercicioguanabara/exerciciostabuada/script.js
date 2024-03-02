function tabuada(){
    let num = document.getElementById('txtn') // variaveis do html
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Pf digite um numero') // passou
    }else{
        let n = Number(num.value) // transformando o text em numero
        let c = 1  // começa com este numero
        tab.length = '' // puxando a tabela e limpando 
        while (c <= 10){  // 1,2,3,4,5,6,7,8,9,10 esses numeros vai multiplicar por num. ele esta pegando cada numero na sequencia para multiplicar
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}` // variavel num vezes c = 1
            tab.appendChild(item)
            c++
        }
    }
}