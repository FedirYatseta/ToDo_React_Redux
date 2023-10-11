import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FormComponent from "../Form";

const ModalView = ({ onHide, show, addTask, data, updateTask, setEdit }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{data === null ? 'Створити задачу' : 'Оновити вибрану задачу'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormComponent onHide={onHide} addTask={addTask} data={data} updateTask={updateTask} setEdit={setEdit} />
            </Modal.Body>
        </Modal>
    );
};

export default ModalView;
