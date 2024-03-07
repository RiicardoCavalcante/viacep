function consultarEndereço() {
    let button = document.querySelector('#botao')

    button.addEventListener('click', function() {
        let cep = document.querySelector('.cep').value
        console.log('funcionou!')

        if(cep.length !== 8) {
            alert('CEP inválido!')
            
        }

        

    
        let url = `https://viacep.com.br/ws/${cep}/json/`
    
        fetch(url).then(function(response) {
           
           return response.json().then(function(data) {
                mostrarEndereco(data)
            })
        })
    
    })

    function mostrarEndereco(dados) {
        let resultado = document.querySelector('.resultado')

        

        resultado.innerHTML = `
            <div class="resultado">
                <label for="icep">CEP:</label>
                <input type="text" name="icep" id="icep" value="${dados.cep}">
                <label for="iestado">ESTADO:</label>
                <input type="text" name="iestado" id="iestado" value=" ${dados.complemento}">
                <label for="icidade">CIDADE:</label>
                <input type="text" name="icidade" id="icidade" value=" ${dados.localidade}" >
                <label for="ibairro">Bairro:</label>
                <input type="text" name="ibairro" id="ibairro" value=" ${dados.bairro}">
                <label for="iendereço">ENDEREÇO:</label>
                <input type="text" name="iendereço" id="iendereço" value=" ${dados.logradouro}">
            </div>
        `
    }

    

}


consultarEndereço()