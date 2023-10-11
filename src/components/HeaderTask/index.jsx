import React from "react"
import { Row, Col, Button, Form } from "react-bootstrap";
import { PlusIcon } from "../../image/index";
import { selTask } from "../../config/index";

const HeaderTask = ({ filter, handleOpenModal, handleFilter }) => {
    return (
        <Row className="pb-5">
            <Col xs={12} md={8}>
                <Button variant="primary" className=" w-100 rounded-5" onClick={handleOpenModal}>
                    <PlusIcon />Додати нове завдання
                </Button>
            </Col>
            <Col xs={12} md={4}>
                <Form.Select
                    className="rounded-5"
                    name="status"
                    value={filter}
                    onChange={handleFilter}
                >{selTask.map((item, index) => (
                    <option key={index} value={item.value}>{item.title}</option>
                ))
                    }

                </Form.Select>
            </Col>
        </Row>
    )
};

export default HeaderTask;
