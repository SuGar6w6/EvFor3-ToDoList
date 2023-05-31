import './App.css';
import { Formulario } from './Componentes/Formulario'; 
import React, { useState } from 'react';
import { Tarea } from './Componentes/Tarea';

function App() {
  const [tareaActual, setTareaActual] = useState('');
  const [listaDeTareas, setListaDeTareas] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (tareaActual === '') {
      alert('Introduce una tarea primero');
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea: tareaActual,
      completado: false,
    };

    const temp = [nuevaTarea, ...listaDeTareas];
    setListaDeTareas(temp);
    setTareaActual('');
    console.log(listaDeTareas);
  }

  function handleChange(e) {
    setTareaActual(e.target.value);
    console.log(tareaActual);
  }

  function onActualizarTarea(objEditarTarea) {
    const {id, tarea} = objEditarTarea
    const temp = [...listaDeTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea

    setListaDeTareas(temp)
  }

  function onBorrarTarea(id) {
    const temp = listaDeTareas.filter(item => item.id !== id)
    setListaDeTareas(temp)
  }

  return (
    <>
      <div className='contenedorprincipal'>
        <h1>ToDo</h1>
        <h3>List</h3>
        <div className='contenedorFormulario'>
          <Formulario
            Tarea={tareaActual}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>

        <div className='contenedorTareas'>
          <h2>Lista de Tareas</h2>
          <div className='contenedorInfoTareas'>
            {listaDeTareas.map((tarea) => (
              <Tarea key={tarea.id} id={tarea.id} tarea={tarea}
              onActualizarTarea = {onActualizarTarea}
              onBorrarTarea = {onBorrarTarea} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
