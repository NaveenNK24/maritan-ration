import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function maritanRation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inventory, setInventory] = useState({
    packetType: "",
    packetContent: "",
    calories: "",
    expiryDate: "",
    litres: "",
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [validations, setValidations] = useState({
    packetType: "",
    packetContent: "",
    calories: "",
    expiryDate: "",
    litres: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventory({ ...inventory, [name]: value });
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = inventory[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }
    setValidations({ ...validations, [name]: message }); 
  };


  const saveOrUpdateEmployee = () => {
    console.log(inventory);
  };

  const { packetType, packetContent, calories, expiryDate, litres } = inventory;

  const {
    packetType: typeVal,
    packetContent: contentVal,
    calories: caloriesVal,
    expiryDate:expiryVal,
    litres: litresVal  ,
  } = validations;

  return (
    <div className=" block" style={{ paddingTop: "5em" }}>
      <Form>
        <Form.Group>
          <Form.Label> Packet Type: </Form.Label>
          <Form.Select
            placeholder="Packet Type"
            name="packetType"
            className="form-control"
            value={packetType}
            onChange={handleChange}
            onBlur={validateOne}
            aria-label="Default select example"
          >
            <option>Open this select menu</option>
            <option value="Food">Food</option>
            <option value="Drink">Drink</option>
          </Form.Select>
        </Form.Group>
        <div className="errors">{typeVal}</div>
        {packetType === "Food" && (
          <>
            <Form.Group>
              <Form.Label> Packet content: </Form.Label>
              <Form.Control
                placeholder="Packet content"
                name="packetContent"
                className="form-control"
                value={packetContent}
                onChange={handleChange}
                onBlur={validateOne}
                required
              />
            </Form.Group>
            <div className="errors">{contentVal}</div>
            <Form.Group>
              <Form.Label> Calories: </Form.Label>
              <Form.Control
                placeholder="Calories"
                name="calories"
                className="form-control"
                value={calories}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </Form.Group>
            <div className="errors">{caloriesVal}</div>
            <Form.Group>
              <Form.Label> Expiry Date: </Form.Label>
              <Form.Control
                placeholder="Expiry Date"
                name="expiryDate"
                className="form-control"
                type="date"
                value={expiryDate}
                onChange={handleChange}
                onBlur={validateOne}
              />
            </Form.Group>
            <div className="errors">{expiryVal}</div>
          </>
        )}
        {packetType === "Drink" && (
          <>
          <Form.Group>
            <Form.Label> Litres: </Form.Label>
            <Form.Control
              placeholder="Litres"
              name="litres"
              className="form-control"
              type="number"
              value={litres}
              onChange={handleChange}
              onBlur={validateOne}
            />
          </Form.Group>
           <div className="errors">{litresVal}</div>
           </>
        )}

        <Button className="btn btn-success" onClick={saveOrUpdateEmployee}>
          Save
        </Button>
        <Button
          className="btn btn-danger"
          // onClick={}
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default maritanRation;
