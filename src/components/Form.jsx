import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

function Form({ setTaskList, taskList }) {
  const [classm, setClassm] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const newTask = {
          class: classm,
          date,
          description,
          id: taskList.length
        };

        setTaskList((prevArray) => [...prevArray, newTask]);

        // Limpiar los estados y, por lo tanto, los campos de entrada
        setClassm("");
        setDate("");
        setDescription("");
      }}

      className="p-3"
    >
      <Input
        label="class"
        type="text"
        value={classm} // Asigna el valor del estado al campo de entrada
        onChange={(e) => setClassm(e.target.value)}
        className="pb-2"
      />
      <Input
        label="Date"
        type="text"
        value={date} // Asigna el valor del estado al campo  de entrada
        onChange={(e) => setDate(e.target.value)} 
        className="pb-2"

      />

      <Textarea
        label="Description"
        value={description} // Asigna el valor del estado al campo de entrada
        onChange={(e) => setDescription(e.target.value)}   
        className="pb-2"

      />
      <Button type="submit" color="success" className="text-white">SAVE</Button>
    </form>
  );
}

export default Form;
