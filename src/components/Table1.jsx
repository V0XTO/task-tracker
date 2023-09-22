import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  Button,
} from "@nextui-org/react";
import { MdDeleteOutline } from "react-icons/md";

function Table1({ taskList, setTaskList }) {
  const deleteTask = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Class</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Date</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      <TableBody emptyContent="Empety Task">
        {taskList.map((task, index) => (
          <TableRow key={index}>
            <TableCell>{task.class}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.date}</TableCell>
            <TableCell>
              <Switch color="success" />
            </TableCell>
            <TableCell>
              <Button
                color="danger"
                isIconOnly
                onClick={() => deleteTask(task.id)}
              >
                <MdDeleteOutline />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Table1;
