import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Item from "./components/Item";

export default function App() {
  // const [contador, setContador] = useState(0)

  // useEffect: Recibe una funcion y un arreglo de dependencias
  // Cada que contador cambie se ejecutara useEffect
  // 1. al terminar de renderizar el componente se ejecuta useEffect
  // 2. cuando cambia una de sus dependencias se ejecuta useEffects
  // useEffect(() => {
  //   console.log('contador', contador);
  // }, [contador])

  // 1.- se ejecuta al terminanr de renderizar el componente
  // useEffect(() => {
  //   console.log('APP RENDERIZÓ ');
  //   // se utiliza para
  //   // fecth
  //   // motificar analiticas
  // }, [])

  // function onClick() {
  //   setContador(contador + 1)
  //   console.log(contador);
  // }

  // function onClick() {
  //   alert('Click!!!')
  // }

  // function logger(event) {
  //   console.log(event.target.value);
  // }

  // function saludar() {
  //   alert('HOLA MUNDO ')
  // }

  const [todos, setTodos] = useState([]);

  // Guardar el valor del input
  const [text, setText] = useState("");

  function onInputChange(event) {
    setText(event.target.value); // cada que cambie el input, lo guardara en el estado text (setText)
  }

  function addToDo() {
    if (text.trim().length > 0) {
      // validar que el input no este vacio
      // agrega el input (text) al arreglo de ToDos (todos), generando un nuevo arreglo
      setTodos([text, ...todos]); // Para que vayan acomodandose de abajo hacia arriba
      setText(""); // limpiar el input
    }
  }

  // Para que se ejecute el addToDo con el boton enter
  function handledKeyPress(event) {
    if (event.key === "Enter") {
      addToDo();
    }
  }

  // Funcion para eliminar un item de la lista de todos
  function deleteItem(indexToRemove) {
    todos.splice(indexToRemove, 1);
    setTodos([...todos]);
  }

  return (
    <main className="bg-black min-h-screen flex justify-center p-16 text-white">
      {/* eventos */}
      {/* <button onClick={onClick}>Click me</button> */}
      {/* <input type="text" name="" id="" onChange={logger} /> */}

      {/* <Button text='Hola soy un boton' onClick={onClick} />
      <Button text='Hola soy otro boton' onClick={saludar} /> */}

      {/* <Button onClick={onClick}>Hola soy un boton3</Button>
      <Button onClick={saludar} className='bg-red-500'>Otro Boton2</Button>
      <Button>CUERPO DEL BOTON1</Button> */}

      {/* <Button onClick={onClick}>+</Button>
      <p>{contador}</p> */}

      <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
        <input
          type="text"
          placeholder="Escribe"
          className="bg-white/20 p-2 rounded"
          onChange={onInputChange} // Cada que cambie el input se ejecutara onInputChange
          value={text} // Para que se limpie el input y asi esta ligado al estado text con el setText
          onKeyUp={handledKeyPress} // Para que se ejecute el addToDo con el boton enter
        />
        <Button className="bg-white rounded p-2 text-black" onClick={addToDo}>
          Agregar
        </Button>
        {todos.map((todo, index) => {
          return (
            // <article key={`todo-${index}`}>{todo}</article>;
            <Item
              key={`todo-${index}`}
              text={todo}
              onDelete={() => deleteItem(index)} // Se usa una funcion anonima ya que no recibe un evento sino un valor (index)
            />
          );
        })}
      </div>
    </main>
  );
}
