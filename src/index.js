const button = document.querySelector('#converte');

const geraArquivo = () => {
    let titulo = document.querySelector('#tituloArquivo').value;
    let entrada = document.querySelector('#conteudoJSON').value;
    let blob = new Blob([entrada], {type: "text/plain;charset=utf-8"})
    // Mudar depois para csv e configurar corretamente
    saveAs(blob, titulo+'.txt')
    console.log(blob)
}

button.addEventListener('click', geraArquivo)