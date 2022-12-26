import "./Form.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CloseButton from "react-bootstrap/CloseButton";

export default function FormExample({
  activeForm,
  dish,
  sumCost,
  setActive,
  setActiveForm,
  setActiveSucc,
}) {
  const form = useRef();
  const [validated, setValidated] = useState(false);

  const dishString = dish.reduce((out, elem) => {
    return out += `${elem.item.name}: ${elem.count} \n`
  }, "")

  const returnPastPage = () => {
    setActiveForm("");
    setActive("menu-active");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t8v8uzp",
        "template_6sapjce",
        form.current,
        "p7lugsM5R4Te0tq7C"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        setActiveForm(""),
        setActiveSucc("succ-active")
      );
  };

  return (
    <div className={`form-container ${activeForm}`}>
      <CloseButton onClick={() => setActiveForm("")} className="CloseButton" />
      <Form
        ref={form}
        style={{
          display: "flex",
          alignItems: "center",
        }}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
      >
        <div>
          <span>Ваш заказ:</span>{" "}
          <input
            readOnly
            style={{
              textAlign: "center",
              display: "block",
              backgroundColor: "transparent",
              border: "none",
              textDecoration: "underline",
              fontSize: "25px",
              outline: "none",
              textAlign: "center",
              color: "transparent",
              textShadow: "0 0 0 black",
            }}
            name="user_order"
            value={dishString}
            size={dishString.length > 1 ? dishString.length - 1 : 1}
          />
          <br />
          <span>Оплата составит:</span>{" "}
          <input
            readOnly
            style={{
              textAlign: "center",
              display: "block",
              backgroundColor: "transparent",
              border: "none",
              textDecoration: "underline",
              fontSize: "25px",
              outline: "none",
              color: "transparent",
              textShadow: "0 0 0 black",
            }}
            name="user_pay"
            value={sumCost}
            size={dishString.length > 1 ? dishString.length - 1 : 1}
          />
        </div>
        <Form.Group as={Col} md="77" controlId="validationCustom01">
          <Form.Control
            required
            type="text"
            name="user_name"
            placeholder="Имя"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <Form.Control
            style={{ marginTop: "15px" }}
            required
            type="tel"
            name="user_tel"
            placeholder="+7(ХХХ)-ХХХ-ХХ-ХХ"
          />
          <Form.Control.Feedback></Form.Control.Feedback>
          <InputGroup hasValidation>
            <InputGroup.Text
              style={{ marginTop: "15px" }}
              id="inputGroupPrepend"
            >
              @
            </InputGroup.Text>
            <Form.Control
              style={{ marginTop: "15px" }}
              type="email"
              name="email_id"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Укажите свой email.
            </Form.Control.Feedback>
          </InputGroup>
          <Button style={{ marginTop: "15px" }} type="submit" value="Send">
            Отправить
          </Button>
        </Form.Group>
      </Form>
      <i onClick={returnPastPage} className="arrow left"></i>
    </div>
  );
}
