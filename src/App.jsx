import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import ModalView from "./components/Modal";
import useHookTask from "./hook/index";
import ListTask from "./components/ListTask";
import HeaderTask from "./components/HeaderTask";

const App = () => {
  const { setShow, setEdit, handleOpenModal,
    handleAddTask, handleDelete, handleEditTask,
    handleUpdateTask, handleFilter, show, edit, filter, data } = useHookTask()

  return (
    <Container>

      {show && (
        <ModalView
          show={show}
          onHide={() => setShow(false)}
          addTask={handleAddTask}
          data={edit}
          updateTask={handleUpdateTask}
          setEdit={setEdit}
        />
      )}
      <p muted className="fs-1 text-center mb-5 fw-bold">
        TO DO
      </p>
      <HeaderTask filter={filter} handleOpenModal={handleOpenModal} handleFilter={handleFilter} />
      <ListTask data={data} filter={filter} handleEditTask={handleEditTask} handleDelete={handleDelete} />
    </Container>
  );
};

export default App;
