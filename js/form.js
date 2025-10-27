
//class contato

class contato {
    constructor(nome, email, cpf, sobrenome, telefone, contato, cep, endereco, numeroendereco) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
        this.cep = cep;
        this.endereco = endereco;
        this.numeroendereco = numeroendereco;
    }

}

function Post(form) {



    let data = new contato(
        form.elements.nome.value,
        form.elements.email.value,
        form.elements.cpf.value,
        form.elements.sobrenome.value,
        form.elements.telefone.value,
        form.elements.contato.value,
        form.elements.cep.value,
        form.elements.endereco.value,
        form.elements.numeroendereco.value
    );
    console.log(data);
    BuscarCep(data.cep);
    form.reset();



    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}  os seus dados foram encaminhados com sucesso`);
    


    return false;
}

function BuscarCep(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert("CEP inválido. Deve conter 8 números.");
        return 0;
    }

    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    console.log("Consultando:", apiUrl);

    // 2. Faça a requisição usando fetch()
    fetch(apiUrl)
        .then(response => {
            // 3. Verifique se a requisição foi bem-sucedida (código 2xx)
            if (!response.ok) {
                throw new Error('Erro na requisição da API');
            }
            // 4. Converta a resposta para JSON
            return response.json();
        })
        .then(data => {
            // 5. Use os dados convertidos para o que precisar
            console.log("Resultado da API:", data);
            // Preenche automaticamente o endereço
            document.querySelector('input[name="endereco"]').value = data.street || "";
        })
        .catch(error => {
            // 6. Capture e trate qualquer erro ocorrido
            console.error('Erro ao buscar CEP:', error);
            alert("Não foi possível buscar o CEP.");
        });

    const endereco = document.getElementById("endereco");
    endereco.value = `${data.street}`;
}

// function AlterandoEndereco(data){


// }

// 1. Defina a URL da API


/*function Enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
 alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}  os seus dados foram encaminhados com sucesso`);
       
    }



}*/

