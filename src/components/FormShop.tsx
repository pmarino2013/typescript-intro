import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
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
  //uso la interfaz de props
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Inputs>(); //el formulario está tipado

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(JSON.stringify(data));
    // console.log("nombre:", data.nombre);

    const producto: Product = {
      //defino un objeto de tipo Product
      id: new Date().getTime(),
      nombre: data.nombre,
      check: false,
    };
    agregarProducto(producto);
    resetField("nombre"); //limpio el campo
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label className="font-bold">Ingresa el producto:</label>
        <input
          type="text"
          {...register("nombre", { required: "Este campo es obligatorio" })}
          className="mt-1 border-2 border-amber-500 outline-none bg-slate-50 rounded-md py-1 px-1 focus:ring-1 ring-amber-700 transition-all ease-in-out"
          autoComplete="off"
        />
        {errors.nombre && (
          <p className="text-red-700">{errors.nombre.message}</p>
        )}
      </div>
    </form>
  );
};

export default FormShop;
