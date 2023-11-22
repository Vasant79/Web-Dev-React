import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyCard from "./Component/MyCard";

// async function always return promise- can be fullfilled or rejected
//await - it confirms that we are receiveing it.
// we can edit it and take specific info eg- replace response with {data}
// {data} it will only fetch info of data

const App = () => {
  const [apiDetail, setApiDetail] = useState({});

  const fetchDetail = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log("Response", data);

    // i was making mistake in storing of api data

    const x = data.results[0];
    setApiDetail(x);
  };

  //calling method in useEffect ----- fetchDetail()

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div>
      <Container fluid=" p-4 App bg-primary ">
        <Row>
          <Col md={4} className=" offset-md-4 mt-4">
            <MyCard apiDetail={apiDetail} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
