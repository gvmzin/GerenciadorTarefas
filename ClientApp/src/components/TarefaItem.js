// ClientApp/src/components/TarefaItem.js
import React from 'react';

export const TarefaItem = ({ tarefa, onToggleConcluida, onDelete }) => {
    return (
        <li className={`tarefa-item ${tarefa.concluida ? 'concluida' : ''}`}>
            <div>
                <h3>{tarefa.titulo}</h3>
                <p>{tarefa.descricao}</p>
            </div>
            <div className="tarefa-actions">
                <button onClick={() => onToggleConcluida(tarefa)}>
                    {tarefa.concluida ? 'Reabrir' : 'Concluir'}
                </button>
                <button className="delete-btn" onClick={() => onDelete(tarefa.id)}>
                    Excluir
                </button>
            </div>
        </li>
    );
};