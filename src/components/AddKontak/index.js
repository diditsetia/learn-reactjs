import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../actions/kontakAction";

export default function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  const {addKontakResult} = useSelector((state)=> state.KontakReducer);

  const dispatch = useDispatch();

  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  useEffect(()=> {
    if(addKontakResult){
        dispatch(getListKontak());
    }
  },[addKontakResult])
  return (
    <div> 
      <h4>Add Kontak</h4>
      <form onSubmit={(event) => handelSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="nohp"
          placeholder="Nomor Hp"
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
