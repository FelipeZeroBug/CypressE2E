<div align="center">

<img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" width="200"/>

# 🤖 CypressE2E

### 🧪 Automação de Testes E2E — Login · Cadastro · Textos · Imagens

<br/>

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<br/>

</div>

---

## 📖 Sobre o Projeto

> Projeto desenvolvido durante o **Curso de Automação de Testes**, cobrindo testes reais de uma aplicação web completa com **Cypress**.

A aplicação testada possui **4 telas** com fluxos distintos, todos automatizados e validados:

| 🖥️ Tela | 📌 O que faz |
|---------|-------------|
| 🔐 Login | Autenticação do usuário |
| 📋 Cadastro | Formulário com nome, telefone, data de nascimento e sexo |
| 📝 Textos | Página com conteúdo em texto |
| 🖼️ Imagem | Página com exibição de imagens |

---

## 🔐 Tela de Login

> Valida o acesso à aplicação antes de qualquer ação.

**O que é testado:**
- ✅ Visibilidade dos campos de usuário e senha
- ✅ Visibilidade do botão de entrar
- ✅ Redirecionamento correto após login
- ✅ Mensagem de erro com credenciais inválidas

```js
// Exemplo do teste de login
cy.get('#usuario').type('admin')
cy.get('#senha').type('1234')
cy.get('#btnEntrar').click()
cy.url().should('include', 'index.html')
```
<img width="2464" height="1232" alt="image" src="https://github.com/user-attachments/assets/264905df-07cc-4ee2-8b6e-8b4fecc7a7b9" />

---

## 📋 Tela de Cadastro

> O coração da aplicação — formulário completo com validação em tabela.

**O que é testado:**
- ✅ Labels corretos: `Nome Completo`, `Telefone`, `Data de Nascimento`, `Sexo`
- ✅ Preenchimento de todos os campos
- ✅ Seleção do radio button (Masculino / Feminino)
- ✅ Clique no botão `Cadastrar`
- ✅ Validação dos dados salvos na tabela

```js
// Exemplo do teste de cadastro
cy.get('#txtNome').type('Felipe Freitas')
cy.get('#numero').type('11974402293')
cy.get('#dtpDataNascimento').type('2002-11-25')
cy.get('#rdoMasculino').click()
cy.get('#btnCadastrarSalvar').click()

// Valida na tabela
cy.get('#rowTable0 > :nth-child(2)').should('contain', 'Felipe Freitas')
cy.get('#rowTable0 > :nth-child(5)').should('contain', 'M')
```

**Campos do formulário:**

| Campo | ID | Tipo |
|-------|----|------|
| Nome Completo | `#txtNome` | Text |
| Telefone | `#numero` | Text |
| Data de Nascimento | `#dtpDataNascimento` | Date |
| Sexo Masculino | `#rdoMasculino` | Radio |
| Sexo Feminino | `#rdoFeminino` | Radio |
| Botão Cadastrar | `#btnCadastrarSalvar` | Button |

<img width="1672" height="1368" alt="image" src="https://github.com/user-attachments/assets/d8ca09cd-2811-4f2c-8528-e9a7c6b89e75" />

---

## 📝 Tela de Textos

> Página de conteúdo com textos informativos.

**O que é testado:**
- ✅ Existência e visibilidade do conteúdo textual
- ✅ Botão de navegação para voltar à tela principal
- ✅ Título e corpo da página carregados corretamente

```js
// Exemplo do teste de textos
cy.visit('/texto.html')
cy.get('h1').should('be.visible')
cy.get('[href="./index.html"] > button').should('be.visible')
```
<img width="1590" height="1404" alt="image" src="https://github.com/user-attachments/assets/4833abf8-63b2-483a-9a03-489fbfc78d58" />

---

## 🖼️ Tela de Imagem

> Página dedicada à exibição de imagens.

**O que é testado:**
- ✅ Imagem carregada e visível na tela
- ✅ Botão de navegação funcional
- ✅ Elemento `<img>` presente no DOM

```js
// Exemplo do teste de imagem
cy.visit('/imagem.html')
cy.get('img').should('be.visible')
cy.get('[href="./index.html"] > button').should('be.visible')
```
<img width="1542" height="1354" alt="image" src="https://github.com/user-attachments/assets/10c95f2a-af3a-49e5-9427-883984d6df42" />

---

## 📁 Estrutura do Projeto

```
CypressE2eApi/
│
├── 📂 css/                      # Estilos da aplicação
├── 📂 fonts/                    # Fontes customizadas
├── 📂 images/                   # Imagens da aplicação
│
├── 📂 cypress/
│   ├── 📂 e2e/                  # 🔥 Todos os testes ficam aqui
│   │   └── tela_inicial.cy.js  # Testes da aplicação
│   ├── 📂 fixtures/             # Dados estáticos para testes
│   ├── 📂 support/              # Comandos customizados
│   └── 📂 plugins/              # Plugins do Cypress
│
├── 📄 index.html                # 🏠 Tela principal (Cadastro)
├── 📄 login.html                # 🔐 Tela de Login
├── 📄 texto.html                # 📝 Tela de Textos
├── 📄 imagem.html               # 🖼️ Tela de Imagem
├── 📄 myscript.js               # ⚙️ Lógica da aplicação
├── 📄 cypress.config.js         # ⚙️ Configuração do Cypress
├── 📄 package.json              # 📦 Dependências
└── 📄 .gitignore                # 🚫 Arquivos ignorados pelo Git
```

---

## 🚀 Como rodar o projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/)
- Extensão **Live Server** no VSCode (para rodar a aplicação)

---

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/FelipeZeroBug/CypressE2eApi.git
cd CypressE2eApi
```

---

### 3️⃣ Instalar dependências

```bash
npm install
```

---

### 4️⃣ Rodar a aplicação

Abra o `index.html` com o **Live Server** do VSCode.
A aplicação vai rodar em:
```
http://127.0.0.1:5500
```

---

### 5️⃣ Executar os testes

```bash
# 🖥️ Interface gráfica do Cypress (recomendado para ver os testes rodando)
npx cypress open

# 💻 Terminal sem interface (headless)
npx cypress run
```

---

## ⚠️ Atenção

> Antes de rodar os testes, **a aplicação precisa estar rodando** no Live Server na porta `5500`.
> Sem isso, o Cypress não consegue acessar as páginas e os testes vão falhar.

---

## 👨‍💻 Autor

<div align="center">

<br/>

**Felipe Freitas**
Estudante de Automação de Testes 🚀

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-FelipeZeroBug-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/FelipeZeroBug)

<br/>

---

Feito com 💚 e muito **Cypress**

*"Automatize o que é repetitivo, foque no que importa."*

</div>
