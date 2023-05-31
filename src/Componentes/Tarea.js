import React, { useState } from 'react';

export function Tarea(props) {
    const { tarea, onActualizarTarea, onBorrarTarea } = props;
    const [editando, setEditando] = useState(false);
    const [valor, setValor] = useState(tarea.tarea);
    const [estaCompletado, setestaCompletado] = useState(false);

    function handleChange(e) {
        const text = e.target.value;
        setValor(text);
    }

    function handleClick() {
        onActualizarTarea({
            id: tarea.id,
            tarea: valor,
            completado: false
        });
        setEditando(false);
    }

    return (
        <>
            <div className="contenedorTareas" id={tarea.id}>
                {editando ? (
                    <>
                        <input
                            type="text"
                            onChange={handleChange}
                            value={valor}
                        />
                        <button className="btn" onClick={handleClick}>
                            Guardar
                        </button>
                        <button className="btn btnBorrar"
                        onClick={() => onBorrarTarea(tarea.id)}>
                            Borrar
                        </button>
                    </>
                ) : (
                    <>
                        <span 
                        className={estaCompletado ? "todoTarea spanSubrayada" : "todoTarea"}
                        onClick ={() => setestaCompletado(!estaCompletado)}>
                            {tarea.tarea}</span>
                        <button
                            className="btn btnEditar"
                            onClick={() => setEditando(true)}
                        >
                            Actualizar
                        </button>
                        <button className="btn btnBorrar"
                        onClick={() => onBorrarTarea(tarea.id)}>
                            Eliminar</button>
                    </>
                )}
            </div>
        </>
    );
}
