// ClientApp/src/components/TarefaList.js
import React from 'react';
import { TarefaItem } from './TarefaItem';

export const TarefaList = ({ tarefas, onToggleConcluida, onDelete }) => {
    return (
        <ul className="tarefa-list">
            {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
            {tarefas.map(tarefa => (
                <TarefaItem
                    key={tarefa.id}
                    tarefa={tarefa}
                    onToggleConcluida={onToggleConcluida}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};