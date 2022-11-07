import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Milestones from "./Milestones";

function TransactionMilestone() {
  const [numMilestones, setNumMilestones] = useState(1);
  const [totalAmount, setTotalAmount] = useState(100);
  const [milestones, setMilestones] = useState([]);

  const handleMileStones = (e) => {
    const { value } = e.target;
    if (value < 0 || value > 100) {
      return;
    }
    setNumMilestones(value);
  };
  const handleAmount = (e) => {
    const { value } = e.target;
    if (value < 0 || value > 100000) {
      return;
    }
    setTotalAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sdasdas", numMilestones, totalAmount, milestones);
  };

  useEffect(() => {
    if (totalAmount && numMilestones) {
      let amountPerMilestone = (totalAmount / numMilestones).toFixed(2);
      let newMilestones = [];
      for (let i = 0; i < numMilestones; i++) {
        newMilestones.push({
          date: milestones[i]?.date ?? null,
          amount: amountPerMilestone,
          percentage: (100 / numMilestones).toFixed(2),
        });
      }
      setMilestones(newMilestones);
    }
  }, [numMilestones, totalAmount]);

  return (
    <div className="container ms-auto w-50 bg-white">
      <h4 className="text-start my-4 p-2">
        <b>Transaction Milestone</b>
      </h4>
      <div className="container mb-4" style={{ boxSizing: "border-box" }}>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <div className="container">
            <Row className="p-2 my-2">
              <Col className="text-start">
                <label>Number of milestone: </label>
                <input
                  style={{ width: "15%", marginLeft: "10px" }}
                  placeholder="ex: 4"
                  type="number"
                  name="numMilestones"
                  value={numMilestones}
                  onChange={(e) => handleMileStones(e)}
                />
              </Col>
            </Row>

            <div className="conatiner">
              <Milestones
                milestones={milestones}
                setMilestones={setMilestones}
              />
            </div>

            <hr
              style={{
                background: "skyblue",
                color: "skyblue",
                borderColor: "skyblue",
                height: "3px",
              }}
            />

            <Row className="p-2 my-2">
              <Col className="text-start" >
                <label>Total Payment Amount: </label>
                <input
                  style={{ width: "15%", marginLeft: "10px" }}
                  placeholder="ex: 400"
                  type="num}ber"
                  name="totalAmount"
                  value={totalAmount}
                  onChange={(e) => handleAmount(e)}
                />
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default TransactionMilestone;
