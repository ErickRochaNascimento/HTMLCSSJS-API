
//class contato

class contato {
    constructor(nome, email, cpf, sobrenome, telefone, contato) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
    }

}

function Post(form) {



    let data = new contato(
        form.elements.nome.value,
        form.elements.email.value,
        form.elements.cpf.value,
        form.elements.sobrenome.value,
        form.elements.telefone.value,
        form.elements.contato.value
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

