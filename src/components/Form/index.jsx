import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import { selTask } from "../../config/index";

const FormComponent = ({ onHide, addTask, data, updateTask, setEdit }) => {

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        status: yup.string().required(),
    });

    const initialValues = data || {
        title: "",
        description: "",
        status: "",
    };

    return (<Formik onReset
        enableReinitialize
        validationSchema={schema}
        onSubmit={(values) => {
            if (data === null) {
                addTask(values)
            }
            else {
                updateTask(values)

            }
            setEdit(null)
            onHide(true)
        }}
        initialValues={initialValues}
    >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit} className="p-2">
                <Form.Group
                    controlId="validationFormik101"
                    className="position-relative "
                >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={values?.title}
                        onChange={handleChange}
                        isValid={touched?.title && !errors?.title}
                        isInvalid={!!errors?.title}
                    />
                </Form.Group>
                <Form.Group

                    controlId="validationFormik102"
                    className="position-relative"
                >
                    <Form.Label>Describe</Form.Label>
                    <Form.Control
                        type="textarea"
                        name="description"
                        value={values?.description}
                        onChange={handleChange}
                        isValid={touched?.description && !errors?.description}
                        isInvalid={!!errors?.description}
                    />

                </Form.Group>
                <Form.Group

                    controlId="validationFormik103"
                    className="position-relative"
                >
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                        name="status"
                        value={values?.status}
                        onChange={handleChange}
                        isValid={touched?.describe && !errors?.describe}
                        isInvalid={!!errors?.describe}
                    >
                        {selTask.map((item, index) => (
                            <option key={index} value={item.value}>{item.title}</option>
                        ))
                        }

                    </Form.Select>
                </Form.Group>
                <div className="my-4 d-flex justify-content-end pt-4">
                    <Button variant="secondary" onClick={onHide} className="mx-2">
                        Закрити
                    </Button>
                    <Button variant="primary" type="submit">
                        {data === null ? 'Зберегти' : 'Оновити'}
                    </Button>
                </div>

            </Form>
        )}
    </Formik>
    );
};

export default FormComponent;
