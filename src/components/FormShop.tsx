import { useForm, type SubmitHandler } from "react-hook-form";
import type { Product } from "../interfaces/products";
//defino la interfaz para los props
interface FormShopProps {
  agregarProducto: (producto: Product) => void;
}
//defino el type para el formulario
type Inputs = {
  nombre: string;
};

const FormShop = ({ agregarProducto }: FormShopProps) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Inputs>();
  //uso la interfaz de props

  const addProduct: SubmitHandler<Inputs> = (data) => {
    const producto = {
      id: new Date().getTime(),
      nombre: data.nombre,
      check: false,
    };
    agregarProducto(producto);
    resetField("nombre");
  };

  return (
    <form onSubmit={handleSubmit(addProduct)}>
      <div className="flex flex-col">
        <label className="font-bold">Ingresa el producto:</label>
        <input
          type="text"
          className="mt-1 border-2 border-amber-500 outline-none bg-slate-50 rounded-md py-1 px-1 focus:ring-1 ring-amber-700 transition-all ease-in-out"
          autoComplete="off"
          {...register("nombre", { required: "El campo no puede estar vacío" })}
        />
        {errors.nombre && (
          <p className="text-red-600">{errors.nombre.message}</p>
        )}
      </div>
    </form>
  );
};

export default FormShop;
