//defino la interfaz para los props

//defino el type para el formulario

const FormShop = () => {
  //uso la interfaz de props

  return (
    <form>
      <div className="flex flex-col">
        <label className="font-bold">Ingresa el producto:</label>
        <input
          type="text"
          className="mt-1 border-2 border-amber-500 outline-none bg-slate-50 rounded-md py-1 px-1 focus:ring-1 ring-amber-700 transition-all ease-in-out"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default FormShop;
