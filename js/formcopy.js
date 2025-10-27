
// ===== Classe para guardar os dados do formulário =====
class Contato {
    constructor(nome, email, cpf, sobrenome, telefone, contato, cep, endereco, numeroendereco, bairro, cidade, estado) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
        this.cep = cep;
        this.endereco = endereco;
        this.numeroendereco = numeroendereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}

// ===== Quando a página carregar =====
document.addEventListener("DOMContentLoaded", () => {
    const cepInput = document.getElementById("cep");

    // Quando o usuário sair do campo CEP, buscar os dados
    cepInput.addEventListener("blur", () => {
        BuscarCep(cepInput.value);
    });
});

// ===== Função chamada ao enviar o formulário =====
function Post(form) {
    let data = new Contato(
        form.elements.nome.value,
        form.elements.email.value,
        form.elements.cpf.value,
        form.elements.sobrenome.value,
        form.elements.telefone.value,
        form.elements.contato.value,
        form.elements.cep.value,
        form.elements.endereco.value,
        form.elements.numeroendereco.value,
        form.elements.bairro ? form.elements.bairro.value : "",
        form.elements.cidade ? form.elements.cidade.value : "",
        form.elements.estado ? form.elements.estado.value : ""
    );

    console.log("Dados enviados:", data);

    alert(`Obrigado sr(a) ${data.nome} ${data.sobrenome}, seus dados foram enviados com sucesso!`);

    form.reset();
    return false; // evita o envio real (recarregar a página)
}

// ===== Função que consulta a API do CEP =====
function BuscarCep(cep) {
    cep = cep.replace(/\D/g, ""); // remove caracteres não numéricos

    if (cep.length !== 8) {
        alert("CEP inválido! Digite 8 números.");
        return;
    }

    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Erro na API do CEP");
            return response.json();
        })
        .then(data => {
            console.log("Dados do CEP:", data);

            // Preencher automaticamente os campos
            if (document.getElementById("endereco")) {
                document.getElementById("endereco").value = data.street || "";
            }
            if (document.getElementById("bairro")) {
                document.getElementById("bairro").value = data.neighborhood || "";
            }
            if (document.getElementById("cidade")) {
                document.getElementById("cidade").value = data.city || "";
            }
            if (document.getElementById("estado")) {
                document.getElementById("estado").value = data.state || "";
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Não foi possível buscar o endereço para este CEP.");
        });
}
