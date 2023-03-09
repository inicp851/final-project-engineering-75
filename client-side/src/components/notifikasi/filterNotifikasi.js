import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const FilterNotifikasi = () => {
  const filterNotif = [
    { id: 1, nama: "Semua Notifikasi", variant: "dark" },
    { id: 2, nama: "Belum Diisi", variant: "secondary"},
    { id: 3, nama: "Proses Review", variant: "warning" },
    { id: 4, nama: "Perlu Revisi", variant: "danger" },
    { id: 5, nama: "Selesai", variant: "success" }
  ]

  return (
    <div className="d-grid">
      <ButtonGroup vertical>
        {filterNotif.map((notif) => (
          <Button variant={notif.variant}>{notif.nama}</Button> 
        ))}
      </ButtonGroup>
    </div>
  );
};

export default FilterNotifikasi;

