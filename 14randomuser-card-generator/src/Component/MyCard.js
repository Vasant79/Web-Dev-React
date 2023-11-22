import React from "react";

import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FaMapMarked, FaPhone } from "react-icons/fa";

const MyCard = ({ apiDetail }) => {
  return (
    <div>
      <Card style={{ height: "15rem", width: "30rem" }}>
        <CardBody className="text-center">
          <img
            height="150"
            width="150"
            className=" img-thumbnail rounded-circle  border-danger"
            src={apiDetail.picture?.large}
          ></img>
          <CardTitle className="text-primary">
            <h1>
              <span className="pr-2">{apiDetail.name?.title}</span>
              <span>{apiDetail.name?.first}</span>
              <span>{apiDetail.name?.last}</span>
            </h1>
          </CardTitle>
          <CardText>
            <FaPhone></FaPhone>
            <span>{apiDetail.phone}</span>
            <br />
            <FaMapMarked></FaMapMarked>
            <span>{apiDetail.location?.state}</span>
            <span>{apiDetail.location?.country}</span>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
