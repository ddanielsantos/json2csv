const button = document.querySelector('#converte');

const createArchive = () => {
    let title = document.querySelector('#tituloArquivo').value;
    let body = document.querySelector('#conteudoJSON').value;
    
    // Identifica a string recebida e parseia para JSON
    let parsedBody = JSON.parse(body)

    // Passsa todos os elementos do array por spread e obtém as chaves dos objetos
    let columns = Object.keys(...parsedBody)

    // Regex pra retirar \n's
    let cutExplicitJumpLine = /\n/mg

    // Conteudo que armazenará tanto cabeçalhos quanto células
    let final = ''
    
    // Passando colunas no início do documento
    for(let i = 0; i < columns.length; i++){
        // A última coluna não possui ;
        if(i == columns.length - 1){
            final+=columns[i]+'\n'
        }else{
            final+=columns[i]+';'
        }
    }
        
    for(let x = 0 ; x < parsedBody.length; x++){
        let line = ''
        let regexed = ''
        let content = ''
        for(let y = 0; y < columns.length; y++){
            line = Object.values(parsedBody[x])[y]
            line = line.toString()
            regexed = line.replaceAll(cutExplicitJumpLine, ' ')
            if(y === columns.length -1){
                content = regexed+'\n'
            }else{
                content = regexed+';'
            }
            final += content
        }
    }

    // Joga todo o conteúdo formatado no saveAs para a criação do arquivo
    let blob = new Blob([final], {type: "text/plain;charset=utf-8"})
    saveAs(blob, title+'.csv')
}

button.addEventListener('click', createArchive)