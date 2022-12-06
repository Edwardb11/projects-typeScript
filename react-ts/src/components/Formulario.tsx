import { useForm } from "../hooks/useForm";
interface FormData {
  email: string;
  nombre: string;
  edad: number;
}

export const Formulario = () => {
  // const [formulario, setFormulario] = useState({
  //   email: "",
  //   nombre: "",
  // });
  // const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = target;
  //   setFormulario({
  //     ...formulario,
  //     [name]: value,
  //   });
  // };

  const { edad, email, nombre , handleChange,formulario } = useForm<FormData>({
    email: "",
    nombre: "",
    edad: 0,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          type="number"
          name="edad"
          value={edad}
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(formulario)}</pre>
    </form>
  );
};
