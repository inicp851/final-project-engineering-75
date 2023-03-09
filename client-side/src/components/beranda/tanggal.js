import React from 'react'

const Tanggal = () => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const display = date.toLocaleDateString("id-ID", options);
  
  return (
    <div>
        {display}
    </div>
  )
}

export default Tanggal