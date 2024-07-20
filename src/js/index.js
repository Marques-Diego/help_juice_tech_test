// input campo
const campo = document.getElementById('campo');

campo.addEventListener('input', function(event) {
    if(this.value.startsWith('/1')){
        campo.classList.add('input-h1');
        campo.value = '';
        campo.placeholder = 'HEADING';
    }
});

campo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {

        if (campo.classList.contains('input-h1')) {
            // Cria um elemento h1
            const novoH1 = document.createElement('h1');
            novoH1.textContent = campo.value;

            // Seleciona o elemento de referência pela classe
            const elementoAlvo = document.querySelector('#campo');

            // Insere o novo h1 antes do elemento alvo
            if (elementoAlvo) {
                elementoAlvo.parentNode.insertBefore(novoH1, elementoAlvo);
            }
            // Limpa o campo de entrada
            campo.value = '';
            campo.classList.remove('input-h1');
            campo.placeholder = "Type / for blocks, @ to link docs or people";
        }else{
            // Cria um elemento <p>
            const novoH1 = document.createElement('p');
            novoH1.textContent = campo.value;

            // Seleciona o elemento de referência pela classe
            const elementoAlvo = document.querySelector('#campo');

            // Insere o novo h1 antes do elemento alvo
            if (elementoAlvo) {
                elementoAlvo.parentNode.insertBefore(novoH1, elementoAlvo);
            }
            // Limpa o campo de entrada
            campo.value = '';
        }

    }
});