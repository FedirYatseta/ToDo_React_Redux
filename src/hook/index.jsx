import React from "react"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../store/application/application.actions";
const useHookTask = () => {
    const { task: data } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(null);
    const [filter, setFilter] = useState("");

    const handleOpenModal = () => {
        setShow(!show);
        setEdit(null);
    };

    const handleAddTask = (task) => {
        dispatch(actions.addTaskSuccessful(task));
    };

    const handleDelete = (id) => {
        dispatch(actions.deleteTaskSuccessful(id));
    }

    const handleEditTask = (id) => {
        setShow(!show);
        setEdit(data.find(item => item.id === id))
    }

    const handleUpdateTask = (task) => {
        dispatch(actions.updateSuccessful(task))
    }

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    return { setShow, setEdit, handleOpenModal, handleAddTask, handleDelete, handleEditTask, handleUpdateTask, handleFilter, show, edit, filter, data }
}


export default useHookTask;
