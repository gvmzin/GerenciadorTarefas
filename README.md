# Gerenciador de Tarefas - React + ASP.NET Core

Aplicação web completa para gerenciamento de tarefas diárias (To-Do List), desenvolvida como uma SPA com **React** no frontend e **ASP.NET Core** no backend. Ideal para praticar integração entre tecnologias modernas de frontend e backend, utilizando APIs REST e manipulação de dados em tempo real.

---

## 🧠 Funcionalidades

* Adicionar tarefas com título e descrição.
* Listar todas as tarefas existentes.
* (Futuras implementações): Marcar como concluída, editar e excluir tarefas.

---

## 🚧 Tecnologias Utilizadas

### Frontend (React)

* **React 17.0.2** – Interface de usuário declarativa e reativa.
* **React Router DOM 5.2.0** – Navegação SPA.
* **Reactstrap 8.9.0 + Bootstrap 5.1.0** – Componentes UI responsivos.
* **http-proxy-middleware 0.19.1** – Proxy de requisições para o backend.

### Backend (ASP.NET Core)

* **ASP.NET Core** – Construção de APIs REST seguras e escaláveis.
* **C#** – Lógica de aplicação.
* **(Opcional) Entity Framework Core** – Abstração de banco de dados (ORM).

### Ferramentas

* **Node.js** – Execução e gerenciamento do frontend.
* **.NET SDK** – Execução do backend em C#.
* **npm** – Gerenciador de pacotes JavaScript.

---

## 📦 Estrutura do Projeto

```plaintext
GerenciadorTarefas/
├── ClientApp/               # Projeto React (frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupProxy.js
│   └── package.json
├── Controllers/             # Endpoints da API (backend)
│   └── TarefasController.cs
├── Data/                    # Acesso a dados (Entity Framework)
├── Models/                  # Classes de modelo
├── Properties/
│   └── launchSettings.json  # Configuração de ambiente
├── appsettings.json         # Configurações do projeto
├── GerenciadorTarefas.csproj
└── ...
```

---

## ▶️ Como Executar o Projeto

### ✅ Pré-requisitos

* **Node.js** (recomendado: versão LTS)
* **.NET SDK** (compatível com ASP.NET Core)

---

### 1. Clonar o repositório

```bash
git clone https://github.com/gvmzin/GerenciadorTarefas
cd GerenciadorTarefas
```

---

### 2. Iniciar o Backend

```bash
cd GerenciadorTarefas       # Certifique-se de estar na raiz do backend
dotnet run
```

> O backend estará disponível em algo como `https://localhost:7201`. Verifique a porta exata no arquivo `launchSettings.json`.

---

### 3. Iniciar o Frontend

```bash
cd ClientApp
npm install
```

#### Verifique o Proxy (`src/setupProxy.js`):

```js
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const targetBackendUrl = 'https://localhost:7201'; // Atualize conforme necessário

  const context = ["/api", "/weatherforecast"];

  app.use(proxy(context, {
    target: targetBackendUrl,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }));
};
```

```bash
npm start
```

> A aplicação React será iniciada em `http://localhost:3000`, já integrada ao backend.

---

## 🧠 Aprendizados Aplicados

* Integração entre React e ASP.NET Core com proxy.
* Consumo de APIs REST com Axios ou Fetch.
* Organização em camadas: Controller, Model, Data.
* Configuração de ambiente com `launchSettings.json` e `setupProxy.js`.

---

## 🤝 Contribuição

Contribuições são muito bem-vindas! Sinta-se à vontade para abrir uma *issue* ou *pull request* com melhorias ou correções.

---

## 📄 Licença

Distribuído sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
