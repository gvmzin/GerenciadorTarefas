Gerenciador de Tarefas
Um aplicativo web completo para gerenciar suas tarefas diárias, construído com React no frontend e ASP.NET Core no backend.

📝 Descrição do Projeto
Este projeto é uma aplicação de gerenciamento de tarefas (To-Do List) que permite aos usuários adicionar e visualizar tarefas. Ele é desenvolvido como uma Single Page Application (SPA) utilizando React para a interface do usuário e um backend robusto em ASP.NET Core para a API.

🚀 Tecnologias Utilizadas
Frontend (ClientApp)
React 17.0.2: Biblioteca JavaScript para construção de interfaces de usuário.

React-Scripts 4.0.3: Ferramenta de linha de comando para configurar e executar projetos React.

Bootstrap 5.1.0: Framework CSS para design responsivo e componentes de UI.

Reactstrap 8.9.0: Componentes Bootstrap para React.

http-proxy-middleware 0.19.1: Usado para proxy de requisições de API do frontend para o backend durante o desenvolvimento.

React Router DOM 5.2.0: Para roteamento de componentes no frontend.

Backend (Projeto ASP.NET Core)
ASP.NET Core: Framework para construção de APIs web robustas e escaláveis.

Entity Framework Core (provável, mas não listado no package.json): Para interação com o banco de dados.

C#: Linguagem de programação.

Ferramentas de Desenvolvimento
Node.js: Ambiente de execução JavaScript.

.NET SDK: Kit de desenvolvimento de software para ASP.NET Core.

npm: Gerenciador de pacotes para Node.js.

✨ Funcionalidades
Adicionar Tarefa: Crie novas tarefas com título e descrição opcional.

Listar Tarefas: Visualize todas as tarefas existentes.

(Potenciais futuras funcionalidades): Marcar como concluída, editar, excluir tarefas.

⚙️ Como Rodar o Projeto
Para configurar e executar este projeto em sua máquina local, siga os passos abaixo:

Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão LTS recomendada)

.NET SDK (versão compatível com ASP.NET Core)

1. Clonar o Repositório
git clone https://github.com/gvmzin/GerenciadorTarefas
cd GerenciadorTarefas

2. Configurar e Iniciar o Backend (ASP.NET Core)
Navegue até a raiz do projeto ASP.NET Core (onde o arquivo .csproj está localizado).

cd GerenciadorTarefas # Se você já não estiver na raiz do projeto

Verifique as portas configuradas no seu launchSettings.json (localizado em Properties/launchSettings.json). As portas padrão para desenvolvimento são geralmente https://localhost:7201 e http://localhost:5248.

Inicie a aplicação backend:

dotnet run

O backend estará rodando e escutando nas portas especificadas. Mantenha este terminal aberto.

3. Configurar e Iniciar o Frontend (React)
Navegue até a pasta ClientApp dentro do seu projeto:

cd ClientApp

Instale as dependências do frontend:

npm install

Configurar o Proxy para o Backend:

É crucial que o frontend saiba onde encontrar o backend. O arquivo src/setupProxy.js é responsável por isso.

Abra o arquivo src/setupProxy.js e certifique-se de que ele está configurado para apontar para a porta HTTPS correta do seu backend. Ajuste a linha targetBackendUrl para a porta que o seu backend ASP.NET Core está utilizando (conforme seu launchSettings.json).

Exemplo de src/setupProxy.js (ajuste a porta conforme necessário):

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // AJUSTE ESTA LINHA para a porta HTTPS correta do seu backend.
  // Use 'https://localhost:7201' se você roda o projeto diretamente.
  // Use 'https://localhost:44348' se você roda via IIS Express.
  const targetBackendUrl = 'https://localhost:7201'; // <<< VERIFIQUE E AJUSTE AQUI

  const context = [
    "/weatherforecast", // Mantenha se seu projeto tiver essa rota
    "/api",             // Essencial para suas rotas de API como /api/tarefas
  ];

  const appProxy = proxy(context, {
    target: targetBackendUrl,
    secure: false, // Mantenha como false para desenvolvimento local (certificados autoassinados)
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};

Após configurar o setupProxy.js, inicie a aplicação React:

npm start

O navegador deverá abrir automaticamente em http://localhost:3000 (ou outra porta disponível). Agora, o frontend e o backend devem se comunicar corretamente.

📂 Estrutura do Projeto
GerenciadorTarefas/
├── .vs/
├── ClientApp/                     # Projeto React (Frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── setupProxy.js          # Configuração do proxy para o backend
│   │   └── ...
│   ├── package.json
│   └── ...
├── Controllers/                   # Controllers da API (Backend)
│   └── TarefasController.cs       # Exemplo de controller para tarefas
├── Data/                          # Camada de acesso a dados (Backend)
├── Models/                        # Modelos de dados (Backend)
├── Properties/
│   └── launchSettings.json        # Configurações de inicialização do backend
├── appsettings.json
├── GerenciadorTarefas.csproj      # Arquivo de projeto do backend
└── ...

🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

📄 Licença
Este projeto está licenciado sob a licença MIT.
