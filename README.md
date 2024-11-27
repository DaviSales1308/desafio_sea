

---

# Desafio de Desenvolvimento - Gestão de Funcionários

Bem-vindo ao **Desafio de Desenvolvimento** para o processo seletivo da empresa. Este projeto tem como objetivo criar uma aplicação para gerenciar dados de funcionários, permitindo adicionar, editar e listar informações como nome, CPF, cargo, status e EPIs utilizados, entre outras funcionalidades. A aplicação foi construída utilizando **React** para a interface de usuário, **Redux** para gerenciamento de estado, e um **JSON Server** para simular uma API RESTful.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário dinâmicas.
- **Redux**: Biblioteca para gerenciamento de estado global da aplicação.
- **React Router**: Utilizado para navegação entre as páginas da aplicação.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **JSON Server**: Simula um servidor RESTful para armazenar e manipular dados de forma simples e eficaz.

---

## Funcionalidades

A aplicação possui as seguintes funcionalidades:

- **Cadastro de Funcionários**: Permite adicionar novos funcionários com informações detalhadas (nome, CPF, RG, sexo, data de nascimento, cargo, status, atividades e EPIs utilizados).
- **Edição de Funcionários**: Através de um formulário, é possível editar os dados de um funcionário já cadastrado.
- **Listagem de Funcionários**: Exibe todos os funcionários cadastrados com a opção de visualizar os detalhes, filtrar e editar.
- **EPIs e Atividades**: O cadastro permite adicionar informações sobre as atividades desempenhadas e os EPIs utilizados por cada funcionário.
- **Validação de Formulários**: Assegura que os dados inseridos sejam válidos e completos.
- **Armazenamento Temporário de Dados**: Utiliza o **JSON Server** para armazenar os dados dos funcionários de forma temporária durante a execução da aplicação. Ao parar o servidor, os dados são perdidos, portanto, é ideal para testes e protótipos rápidos.

---

## Como Rodar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### 1. Clonando o Repositório

```bash
git clone https://github.com/seu-usuario/desafio-gestao-funcionarios.git
```

### 2. Instalando as Dependências

Após clonar o repositório, entre na pasta do projeto e instale as dependências:

```bash
cd desafio-gestao-funcionarios
npm install
```

### 3. Rodando o JSON Server

O **JSON Server** simula uma API RESTful. Para iniciar o servidor, execute:

```bash
npm run json-server
```

Isso iniciará o servidor na URL `http://localhost:5000`, onde os dados serão armazenados.

### 4. Rodando o Frontend

Para rodar a interface do React, execute o seguinte comando:

```bash
npm start
```

Isso abrirá a aplicação no seu navegador, geralmente na URL `http://localhost:3000`.

---

## Endpoints da API

O **JSON Server** irá fornecer os seguintes endpoints para acessar os dados dos funcionários:

- **GET** `/funcionarios`: Retorna todos os funcionários cadastrados.
- **GET** `/funcionarios/{id}`: Retorna os dados de um funcionário específico pelo `id`.
- **POST** `/funcionarios`: Adiciona um novo funcionário.
- **PUT** `/funcionarios/{id}`: Atualiza os dados de um funcionário específico pelo `id`.
- **DELETE** `/funcionarios/{id}`: Deleta um funcionário específico pelo `id`.

---

## Estrutura de Pastas

Aqui está a estrutura de pastas do projeto:

```
/public
    /index.html
/src
    /components       # Componentes React
    /redux           # Arquivos do Redux (ações, reducers)
    /estilos         # Arquivos de estilo CSS
    /images          # Imagens e ícones usados no projeto
    /App.js          # Componente principal da aplicação
    /index.js        # Ponto de entrada do React
/package.json       # Dependências e scripts do projeto
```

---

## Desafios Resolvidos

Este projeto foi desenvolvido com o intuito de praticar e demonstrar habilidades de desenvolvimento com as seguintes tecnologias e conceitos:

- **React**: Criação de componentes reutilizáveis, gerenciamento de estado local e global (Redux).
- **Redux**: Implementação de gerenciamento de estado global para gerenciar os dados dos funcionários e as ações de edição, adição e exclusão.
- **JSON Server**: Criação de um servidor backend simples para armazenar e manipular dados de forma prática durante o desenvolvimento.
- **Validação de Formulários**: Garantir que os dados inseridos sejam válidos antes de enviar para o backend.
- **Testes de API**: Testar a API utilizando ferramentas como o **Postman** para garantir o funcionamento correto do servidor.

---

## Melhorias Futuras

Embora a aplicação atenda aos requisitos principais, há várias melhorias que podem ser implementadas, tais como:

- **Persistência de Dados**: Utilizar um banco de dados real para persistir os dados após reiniciar o servidor.
- **Autenticação**: Implementar um sistema de login para permitir o acesso a diferentes áreas da aplicação.
- **Interface de Usuário**: Melhorar a UI com componentes mais modernos, como **Material-UI** ou **Ant Design**.
- **Testes Automatizados**: Implementar testes unitários e de integração usando **Jest** e **React Testing Library**.

---

## Contribuição

Este é um projeto de desafio técnico e a contribuição direta não está aberta. No entanto, sugestões de melhorias são sempre bem-vindas. Se você deseja sugerir melhorias ou corrigir problemas, sinta-se à vontade para abrir um **issue** ou **pull request**.

---
