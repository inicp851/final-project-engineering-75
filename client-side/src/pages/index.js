import React from 'react'
import Tanggal from '../components/beranda/tanggal'
import FilterBulan from '../components/beranda/filterBulan'
import RekapMingguan from '../components/beranda/rekapMingguan'
import DetailMingguan from '../components/beranda/detailMingguan'
import { Container, Row, Col, Card, Stack } from 'react-bootstrap'

const Beranda = () => {
  const [detailShow, setDetailShow] = React.useState(false);

  return (
    <Container>
      <Stack gap={2}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          Beranda
          <Tanggal />
        </div>
        <Card border="dark">
          <Card.Body>
            <Row>
              <Col sm={3}><FilterBulan /></Col>
              <Col>
                {detailShow === false && (<RekapMingguan detail={() => setDetailShow(true)} />)}
                {detailShow === true && (<DetailMingguan />)}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  )
}

export default Beranda