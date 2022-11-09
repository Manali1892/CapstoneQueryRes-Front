import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { openNewTicket } from "./addTicketAction";
import { shortText } from "../../utils/validation";
import { restSuccessMSg } from "./addTicketSlicer";

import "./add-ticket-form.style.css";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch();

  const {
    user: { name },
  } = useSelector((state) => state.user);

  const { isLoading, error, successMsg } = useSelector(
    (state) => state.openTicket
  );

  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

  useEffect(() => {
    return () => {
      successMsg && dispatch(restSuccessMSg());
    };
    // eslint-disable-next-line
  }, [dispatch, frmData, frmDataErro]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataErro(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    });

    dispatch(openNewTicket({ ...frmData, sender: name }));
  };

    return (
    <div className="jumbotron">
        <h1 className="text-info text-center">Create Query</h1>
        <hr />
        <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />}
      </div>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}>
                            Title
                            </Form.Label>
                            <Col sm={9}></Col>
                        <Form.Control
                         name="title"
                         value={frmData.title}
                         minLength="3"
                         maxLength="100"
                         onChange={handleOnChange}
                         placeholder="Title"
                         required
                        />
                       <Form.Text className="text-danger">{!frmDataErro.title && "title is required"}</Form.Text>
                    </Form.Group>
                    <Form.Group as={Row}> 
                        <Form.Label column sm={3}>
                        Date
                        </Form.Label>
                        <Col sm={9}>
                    
                        <Form.Control
                        type="date"
                        name="date"
                        value={frmData.date}
                        onChange={handleOnChange}
                
                        required
                       />
                       </Col>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        as="textarea"
                        name="description"
                        rows="5"
                        value={frmData.description}
                        onChange={handleOnChange}
                
                        required
                       />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>


    </div>
    );
};

/*AddTicketForm.propTypes={
    handleOnSubmit:PropTypes.func.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    frmDt:PropTypes.object.isRequired,
    frmDataError:PropTypes.object.isRequired,
};*/

