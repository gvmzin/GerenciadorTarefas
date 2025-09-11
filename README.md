# 📋 Task Manager | React + ASP.NET Core

A complete web application for task management (To-Do List), built with a modern SPA (Single Page Application) architecture using **React** on the frontend and a robust REST API with **ASP.NET Core** on the backend.

[![Access Live Application](https://img.shields.io/badge/Access%20Live-Application-brightgreen?style=for-the-badge&logo=rocket)](https://gerenciadortarefas-gt9y.onrender.com/)

---

## 🧠 Features

- **Create Tasks:** Add new tasks with a title and an optional description.
- **List All Tasks:** View all registered tasks in real-time.
- **Edit Tasks:** Modify the title and description of existing tasks.
- **Mark as Complete:** Toggle a task's status between pending and completed.
- **Delete Tasks:** Remove tasks that are no longer needed.

---

## 🚀 Tech Stack

The stack was chosen to demonstrate the integration between the .NET ecosystem and popular modern frontend tools.

### Backend
- **ASP.NET Core 6:** Framework for building secure and high-performance REST APIs.
- **C#:** Primary language for all business logic.
- **Entity Framework Core 6:** ORM for database abstraction and communication.

### Frontend
- **React 17:** Library for building declarative and reactive user interfaces.
- **React Router:** For managing routes within the SPA.
- **Bootstrap + Reactstrap:** For creating a responsive layout and modern UI components.

### Database
- **PostgreSQL:** Robust relational database used in the production environment.
- **SQL Server LocalDB:** Used for the local development environment on Windows.

### Infrastructure & Deployment (DevOps)
- **Docker:** The application is containerized to ensure consistency between environments.
- **Render:** Cloud platform (PaaS) for hosting the backend service and the PostgreSQL database.

---

## 📦 Running the Project Locally

Follow the steps below to run the application on your local machine.

### ✅ Prerequisites
- **.NET 6 SDK**
- **Node.js** (LTS version recommended)
- An instance of **SQL Server LocalDB** (usually installed with Visual Studio)

### 1. Clone the Repository
```bash
git clone https://github.com/gvmzin/GerenciadorTarefas.git
cd GerenciadorTarefas
````

### 2. Configure and Create the Local Database

The project is configured to use SQL Server LocalDB by default for development.

```bash
# Navigate to the backend project folder
cd GerenciadorTarefas 

# Use Entity Framework to create the database and its tables
dotnet ef database update
```

### 3. Start the Backend

Open a terminal in the backend project folder (`/GerenciadorTarefas`).

```bash
dotnet run
```

The API server will start at `https://localhost:7201` (check the exact port in the terminal output).

### 4. Start the Frontend

Open a **new terminal** and navigate to the frontend folder.

```bash
cd ClientApp

# Install dependencies (only the first time)
npm install

# Start the React development server
npm start
```

The React application will start at `http://localhost:3000` and will automatically connect to the backend via the configured proxy.