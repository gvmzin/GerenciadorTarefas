# Task Manager - React + ASP.NET Core

A complete web application for managing daily tasks (To-Do List), developed as a SPA with **React** on the frontend and **ASP.NET Core** on the backend. Ideal for practicing integration between modern frontend and backend technologies, using REST APIs and real-time data manipulation.

---

## 🧠 Features

* Add tasks with a title and description.
* List all existing tasks.
* (Future implementations): Mark as complete, edit, and delete tasks.

---

## 🚧 Technologies Used

### Frontend (React)

* **React 17.0.2** – Declarative and reactive user interface.
* **React Router DOM 5.2.0** – SPA navigation.
* **Reactstrap 8.9.0 + Bootstrap 5.1.0** – Responsive UI components.
* **http-proxy-middleware 0.19.1** – Request proxy to the backend.

### Backend (ASP.NET Core)

* **ASP.NET Core** – Building secure and scalable REST APIs.
* **C#** – Application logic.
* **(Optional) Entity Framework Core** – Database abstraction (ORM).

### Tools

* **Node.js** – Frontend runtime and management.
* **.NET SDK** – C# backend runtime.
* **npm** – JavaScript package manager.

---

## 📦 Project Structure

```plaintext
TaskManager/
├── ClientApp/              # React Project (frontend)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupProxy.js
│   └── package.json
├── Controllers/            # API Endpoints (backend)
│   └── TasksController.cs
├── Data/                   # Data Access (Entity Framework)
├── Models/                 # Model classes
├── Properties/
│   └── launchSettings.json # Environment configuration
├── appsettings.json        # Project settings
├── TaskManager.csproj
└── ...
```

---

## ▶️ How to Run the Project

### ✅ Prerequisites

* **Node.js** (LTS version recommended)
* **.NET SDK** (compatible with ASP.NET Core)

---

### 1. Clone the repository

```bash
git clone https://github.com/gvmzin/GerenciadorTarefas
cd GerenciadorTarefas
```

---

### 2. Start the Backend

```bash
cd GerenciadorTarefas       # Certifique-se de estar na raiz do backend
dotnet run
```

> The backend will be available at an address like https://localhost:7201. Check the exact port in the launchSettings.json file.

---

### 3. Start the Frontend

```bash
cd ClientApp
npm install
```

#### Check the Proxy (src/setupProxy.js):

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

> The React application will start at http://localhost:3000, already integrated with the backend.

---

## 🧠 Key Learnings

* Integration between React and ASP.NET Core using a proxy.
* Consuming REST APIs with Axios or Fetch.
* Layered architecture: Controller, Model, Data.
* Environment configuration with launchSettings.json and setupProxy.js.

---

## 🤝 Contributing

Contributions are very welcome! Feel free to open an issue or pull request with improvements or fixes.
---

## 📄 License

Distributed under the MIT License. See the LICENSE file for more information.
