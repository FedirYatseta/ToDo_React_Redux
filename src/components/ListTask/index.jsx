import React from "react"
import { Stack, Button } from "react-bootstrap";
import { DeleteIcon, EditIcon } from "../../image/index";

const ListTask = ({ data, filter, handleEditTask, handleDelete }) => {
    return (
        <Stack gap={3} >
            {data?.filter(y => !filter || y.status === filter).map((item, index) => (
                <div key={index} className="p-2 border w-75 mx-auto rounded-5 d-flex justify-content-between ">
                    <div className="d-flex align-items-center justify-content-between w-100 px-3">
                        <div>
                            <p className="fs-3 fw-medium">{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                        <p
                            className={`fs-5  ${item.status === 'done' ? "text-success" : item.status === 'progress' ? 'text-primary' : "text-danger"
                                }`}
                        >
                            {item.status === 'done' ? "Виконано" : item.status === 'progress' ? 'В процесі' : "Скасовано"}
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <Button variant="light " className="mx-1 " onClick={() => handleEditTask(item.id)}>
                            <EditIcon color={'black'} />
                        </Button>
                        <Button variant="light " onClick={() => handleDelete(item.id)}>
                            <DeleteIcon color={'black'} />
                        </Button>
                    </div>
                </div>
            ))}
        </Stack>
    )
};

export default ListTask;
