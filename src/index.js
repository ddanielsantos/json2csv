const button = document.querySelector('#converte');

const geraArquivo = () => {
    let titulo = document.querySelector('#tituloArquivo').value;
    let entrada = document.querySelector('#conteudoJSON').value;
    let jsao = JSON.parse(entrada)
    let colunas = Object.keys(...jsao)
    let final = ''
    
    // console.log(colunas)
    // console.log(jsao)
    // console.log(jsao.length)
    
    for(let i = 0; i < colunas.length; i++){
        if(i == colunas.length - 1){
            final+=colunas[i]+'\n'
        }else{
            final+=colunas[i]+';'
        }
    }
    
    // let celulas = Object.values(jsao[2])[3]
    // console.log(celulas)
    
    for(let x = 0 ; x < jsao.length; x++){
        for(let y = 0; y < colunas.length; y++){
            if(y === colunas.length -1){
                final+=Object.values(jsao[x])[y]+'\n'
            }else{
                final+=Object.values(jsao[x])[y]+';'
            }
            // console.log(Object.values(jsao[x])[y])    
        }
    }

    // console.log(Object.values(jsao[2]))
    console.log(final)
    
    let blob = new Blob([final], {type: "text/plain;charset=utf-8"})
    // Mudar depois para csv e configurar corretamente
    saveAs(blob, titulo+'.csv')
    // console.log(blob)
}

button.addEventListener('click', geraArquivo)