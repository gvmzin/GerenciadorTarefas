// ClientApp/src/App.js
import React, { useState, useEffect } from 'react';
import { TarefaForm } from './components/TarefaForm';
import { TarefaList } from './components/TarefaList';
import './App.css'; // Vamos criar este CSS básico

function App() {
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);

    // Efeito para carregar as tarefas da API quando o componente montar
    useEffect(() => {
        const fetchTarefas = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/tarefas');
                if (!response.ok) throw new Error('Falha ao buscar dados');
                const data = await response.json();
                setTarefas(data);
            } catch (error) {
                console.error(error);
                alert("Não foi possível carregar as tarefas.");
            } finally {
                setLoading(false);
            }
        };

        fetchTarefas();
    }, []); // O array vazio [] faz com que este efeito rode apenas uma vez

    // Adicionar Tarefa
    const addTask = async (tarefa) => {
        try {
            const response = await fetch('/api/tarefas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarefa),
            });
            if (!response.ok) throw new Error('Falha ao adicionar tarefa');
            const novaTarefa = await response.json();
            setTarefas([novaTarefa, ...tarefas]);
        } catch (error) {
            console.error(error);
            alert("Erro ao salvar a tarefa.");
        }
    };

    // Deletar Tarefa
    const deleteTask = async (id) => {
        try {
            const response = await fetch(`/api/tarefas/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('Falha ao deletar tarefa');
            setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir a tarefa.");
        }
    };

    // Alternar status (Concluída)
    const toggleConcluida = async (tarefaParaAtualizar) => {
        const tarefaAtualizada = { ...tarefaParaAtualizar, concluida: !tarefaParaAtualizar.concluida };

        try {
            const response = await fetch(`/api/tarefas/${tarefaAtualizada.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tarefaAtualizada),
            });

            if (!response.ok) throw new Error('Falha ao atualizar tarefa');

            setTarefas(
                tarefas.map((t) =>
                    t.id === tarefaAtualizada.id ? tarefaAtualizada : t
                )
            );
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar o status da tarefa.");
        }
    };

    return (
        <div className="container">
            <header>
                <h1>Gerenciador de Tarefas</h1>
            </header>
            <main>
                <TarefaForm onAddTask={addTask} />
                {loading ? <p>Carregando tarefas...</p> :
                    <TarefaList
                        tarefas={tarefas}
                        onDelete={deleteTask}
                        onToggleConcluida={toggleConcluida}
                    />
                }
            </main>
        </div>
    );
}

export default App;