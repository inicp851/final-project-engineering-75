import React from "react";
import { ListGroup, Card } from "react-bootstrap";

const DetailNotifikasi = () => {
  const dataNotif = [
    {id: 1, nama: "notifikasi 1", tanggal: "1 Juni 2022", status: "belum diisi", variant: "secondary"},
    {id: 2, nama: "notifikasi 2", tanggal: "16 Mei 2022", status: "pending", variant: "warning"},
    {id: 3, nama: "notifikasi 3", tanggal: "23 Mei 2022", status: "perlu revisi", variant: "danger"},
    {id: 4, nama: "notifikasi 4", tanggal: "9 Mei 2022", status: "selesai", variant: "success"}
  ]

  return (
    <Card border="dark">
      <ListGroup variant="flush">
        {dataNotif.map((notif) => (
          <ListGroup.Item className="justify-content-between align-items-start" variant={notif.variant}>
            <div className="text-start fw-bold">Jurnal tanggal {notif.tanggal} {notif.status}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default DetailNotifikasi;
