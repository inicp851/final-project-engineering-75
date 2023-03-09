import React from "react";
import FilterNotifikasi from "../components/notifikasi/filterNotifikasi";
import DetailNotifikasi from "../components/notifikasi/detailNotifikasi";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";

const Notifikasi = () => {
  return (
    <Container>
      <Stack gap={2}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Col className="text-start"> Notifikasi</Col>
          <Col className="text-end">Tandai Semua Sudah Dibaca</Col>
        </div>
        <Card border="dark">
          <Card.Body>
            <Row>
              <Col sm={3}>
                <FilterNotifikasi />
              </Col>
              <Col>
                <DetailNotifikasi />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
};

export default Notifikasi;
