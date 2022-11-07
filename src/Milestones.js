import React, { useCallback } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import DatePicker from "react-datepicker";

const Milestones = ({ milestones, setMilestones }) => {
  const handleDateChange = (date, index) => {
    let data = [...milestones];
    data[index].date = date;
    data.map((milestone) => {
      if (milestone.date > date) {
        milestone.date = null;
      }
      return milestone;
    });
    setMilestones(data);
  };

  const getMinimumDate = useCallback(
    (index) => {
      if (index === 0) {
        return new Date();
      }

      for (let i = index - 1; i >= 0; i--) {
        if (milestones[i].date) {
          return milestones[i].date;
        }
      }
    },
    [milestones]
  );

  return (
    <div className="container my-2">
      {milestones.map((item, i) => (
        <Row key={i}>
          <Col md className="m-2">
            <div className="d-flex p-2">
              <span className="m-2 p-1 bg-warning rounded">Milestone {i+1} </span>
              <span className="p-2 mx-2">${item.amount}</span>
              <span className="p-2 mx-2">{item.percentage}% </span>
              <div className="date px-2">
                <DatePicker
                  size="small"
                  placeholderText="Due date"
                  selected={item.date}
                  onChange={(date) => handleDateChange(date, i)}
                  minDate={getMinimumDate(i)}
                />
              </div>
            </div>
          </Col>
          
        </Row>
      ))}
    </div>
  );
};

export default Milestones;
