import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const InputJurnal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tulis Jurnal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Kamis, 02 Juni 2022</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Simpan</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default InputJurnal