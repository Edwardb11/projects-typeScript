import React from "react";
import { useForm } from "../hooks/useForm";

export const Formulario2 = () => {

  const { formulario, handleChange } = useForm({
    postal: "",
    ciudad: "",
  });

  const { postal, ciudad} = formulario;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Codigo Postal</label>
        <input
          type="text"
          name="postal"
          className="form-control"
          value={postal}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={ciudad}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
