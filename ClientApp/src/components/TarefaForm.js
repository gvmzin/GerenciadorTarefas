// ClientApp/src/components/TarefaForm.js
import React, { useState } from 'react';

export const TarefaForm = ({ onAddTask }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo) {
            alert('Por favor, adicione um título.');
            return;
        }
        onAddTask({ titulo, descricao, concluida: false });
        setTitulo('');
        setDescricao('');
    };

    return (
        <form className="tarefa-form" onSubmit={handleSubmit}>
            <h2>Nova Tarefa</h2>
            <div className="form-control">
                <label>Título</label>
                <input
                    type="text"
                    placeholder="Adicionar Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Descrição (Opcional)</label>
                <textarea
                    placeholder="Adicionar Descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn-submit">Salvar Tarefa</button>
        </form>
    );
};