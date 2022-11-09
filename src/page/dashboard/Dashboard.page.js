import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button,Nav } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
//import tickets from '../../assets/Data/queries.json'
import plus from "../../assets/img/plus.svg";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

import { fetchAllTickets } from "../ticket-listing/ticketsAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  useEffect(() => {
    if (!tickets.length) {
      dispatch(fetchAllTickets());
    }
  }, [tickets, dispatch]);

  const pendingTickets = tickets.filter((row) => row.status !== "Closed");
  const totlatTickets = tickets.length;
    return ( 
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="text-left mt-5 mb-2">
                  <Nav.Link href ="/add-ticket">
                <Button 
                variant="info" 
                style={{"fontize":"2rem", padding: "10px 30px" }}
                >
                     <img src={plus} alt="icon" width="20px"/>
                    Create Query
                    </Button>
                    </Nav.Link>
                </Col>
            </Row>
            <Row>
        <Col className="text-center  mb-2">
        <div>Total tickets: {totlatTickets}</div>
          <div>Pending tickets: {pendingTickets.length}</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added Queries</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
        </Container>
    );
};