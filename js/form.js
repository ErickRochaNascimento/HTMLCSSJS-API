
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
        form.elements.numeroendereco.value,
    );
    console.log(data);
    
    form.reset();

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}  os seus dados foram encaminhados com sucesso`);
    
    
    
    return false;
}



function bloquear(check){
    const btnLgpd = document.getElementById("btnLgpd")
    const texto = document.getElementById("texto")//Texto de alerta de termos e condicoes
    if(check.checked){
        btnLgpd.disabled = false;
        btnLgpd.classList.remove("desabilitado")
        texto.classList.remove("textodesabilitado")
    }else{
        btnLgpd.disabled = true;
        btnLgpd.classList.toggle("desabilitado")
        texto.classList.toggle("textodesabilitado")
    }
}




function BuscarCep(cep) {
    cep = cep.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert("CEP inválido. Deve conter 8 números.");
        return;
    }

    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    console.log("Consultando:", apiUrl);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro na requisição da API');
            return response.json();
        })
        .then(data => {
            console.log("Resultado da API:", data);
            // Preenche os campos com os dados da API
            document.getElementById("endereco").value = data.street || "";
            document.getElementById("bairro").value = data.neighborhood || "";
            document.getElementById("cidade").value = data.city || "";
            document.getElementById("estado").value = data.state || "";
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert("Não foi possível buscar o CEP.");
        });
}
