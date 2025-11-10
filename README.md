# 🚗 Ford - Página de Lançamentos e Contato

---

## 📄 Sobre o Projeto
Este projeto simula uma página web para a Ford, focada em apresentar lançamentos de veículos (Ranger) e um formulário de contato com funcionalidades avançadas. Foi desenvolvido utilizando **HTML, CSS e JavaScript**.

---

### ✨ Destaque: Integração com API Externa
A principal funcionalidade de destaque é a inteligência do formulário de contato, que utiliza a **Fetch API** do JavaScript para consumir um serviço externo e realizar o **autocomplete de endereço** a partir do CEP.

* **API Utilizada:** **BrasilAPI**.
* **Mecanismo:** Ao preencher e sair do campo `CEP` (`onblur`), o JavaScript (`js/form.js`) faz uma requisição HTTP para a BrasilAPI.
* **Benefício:** A API retorna os dados do endereço (rua, bairro, cidade, estado), que são automaticamente preenchidos nos campos correspondentes do formulário, otimizando a experiência do usuário.

---

## ⚠️ Nota sobre Versão sem API
Para fins didáticos e demonstração de diferentes estágios de desenvolvimento, este projeto possui um repositório "irmão" que **não inclui a integração com a API de CEP**. Você pode acessá-lo aqui:

> [**https://github.com/ErickRochaNascimento/JAVASCRIPT-SPRINT5**]

---

## 🛠️ Tecnologias Utilizadas
Este projeto é puramente Front-end e utiliza as seguintes tecnologias:

* **HTML5:** Estrutura das páginas.
* **CSS3:** Estilização.
* **JavaScript** Lógica de programação, manipulação do DOM e consumo da API.
    * `js/form.js`: Funções de envio, validação e busca de CEP via **Fetch API** (BrasilAPI).

---

## 🌐 Acesse o site online:

O projeto está disponível publicamente através do GitHub Pages. Você pode testá-lo diretamente neste link:
👉 https://erickrochanascimento.github.io/HTMLCSSJS-API/

---

## 🧑‍💻 Autor

**Erick Rocha Nascimento**  
🔗 [LinkedIn](https://www.linkedin.com/in/erickrochanascimento) | [GitHub](https://github.com/ErickRochaNascimento)



